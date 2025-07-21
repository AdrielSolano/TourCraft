import Usuario from "../models/usuario.js";
import Guia from "../models/guia.js";
import TipoUsuario from "../models/tipo_usuario.js";
import { createdAccessToken } from "../libs/jwt.js";
import Login from "../models/login.js";

export const smartRegister = async (req, res) => {
  const { 
    email, 
    nombre, 
    apellido_paterno, 
    apellido_materno, 
    telefono, 
    edad, 
    id_ubicación, 
    tipo_persona = 'usuario',
    // Campos específicos de guía
    descripción,
    tarifa_hora,
    certificado_id,
    zona_turistica_id
  } = req.body;

  try {
    // Verificar si el email ya existe (tanto en usuarios como en guías)
    const existingUser = await Usuario.findOne({ email });
    const existingGuia = await Guia.findOne({ email });
    
    if (existingUser || existingGuia) {
      return res.status(400).json({ 
        success: false,
        message: "El email ya está registrado" 
      });
    }

    // Buscar el tipo de usuario correspondiente
    const tipoUsuario = await TipoUsuario.findOne({ tipo_persona });
    if (!tipoUsuario) {
      return res.status(400).json({ 
        success: false,
        message: "Tipo de usuario no válido" 
      });
    }

    let savedRecord;
    let token;

    if (tipo_persona === 'guia') {
      // Registrar como guía
      const newGuia = new Guia({
        id_usuario: `GUI${Date.now()}`, // Generar ID único
        nombre,
        apellido_paterno,
        apellido_materno,
        email,
        telefono,
        edad: parseInt(edad) || 0,
        id_ubicación,
        id_tipo: tipoUsuario._id,
        estatus: true,
        // Campos específicos de guía
        descripción: descripción || "",
        tarifa_hora: tarifa_hora || 0,
        certificado_id,
        zona_turistica_id,
        disponibilidad: true,
        calificación: 0
      });
      
      savedRecord = await newGuia.save();
      
      token = await createdAccessToken({ 
        id: savedRecord._id, 
        tipo_persona: 'guia',
        isGuia: true
      });

    } else {
      // Registrar como usuario normal
      const newUser = new Usuario({
        nombre,
        apellido_paterno,
        apellido_materno,
        email,
        telefono,
        edad: parseInt(edad) || 0,
        id_ubicación,
        id_tipo: tipoUsuario._id,
        estatus: true
      });
      
      savedRecord = await newUser.save();
      
      token = await createdAccessToken({ 
        id: savedRecord._id, 
        tipo_persona: 'usuario',
        isGuia: false
      });
    }

    res.cookie("token", token);
    res.status(201).json({
      success: true,
      message: `${tipo_persona === 'guia' ? 'Guía' : 'Usuario'} registrado exitosamente`,
      data: {
        id: savedRecord._id,
        nombre: savedRecord.nombre,
        apellido_paterno: savedRecord.apellido_paterno,
        apellido_materno: savedRecord.apellido_materno,
        email: savedRecord.email,
        telefono: savedRecord.telefono,
        edad: savedRecord.edad,
        tipo_persona: tipoUsuario.tipo_persona,
        isGuia: tipo_persona === 'guia',
        // Campos específicos si es guía
        ...(tipo_persona === 'guia' && {
          descripción: savedRecord.descripción,
          tarifa_hora: savedRecord.tarifa_hora,
          certificado_id: savedRecord.certificado_id,
          zona_turistica_id: savedRecord.zona_turistica_id,
          disponibilidad: savedRecord.disponibilidad,
          calificación: savedRecord.calificación
        }),
        createdAt: savedRecord.createdAt || savedRecord.create_at,
        updatedAt: savedRecord.updatedAt || savedRecord.update_at,
      }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Error al registrar",
      error: error.message 
    });
  }
};

export const smartLogin = async (req, res) => {
  console.log("Entró a smartLogin", req.body);
  const { email } = req.body;

  try {
    let userFound = await Usuario.findOne({ email }).populate('id_tipo');
    let isGuia = false;
    let tipo_persona = 'usuario';

    if (!userFound) {
      userFound = await Guia.findOne({ email }).populate('id_tipo');
      isGuia = true;
      tipo_persona = 'guia';
    }

    // Registrar el intento de login con try/catch
    try {
      await Login.create({
        email,
        tipo_persona: userFound ? tipo_persona : 'desconocido',
        exito: !!userFound
      });
      console.log("Intento de login registrado:", email);
    } catch (err) {
      console.error("Error al registrar login:", err);
    }

    if (!userFound) {
      return res.status(400).json({ 
        success: false,
        message: "Credenciales inválidas, intenta de nuevo" 
      });
    }

    const token = await createdAccessToken({ 
      id: userFound._id, 
      tipo_persona: userFound.id_tipo?.tipo_persona || (isGuia ? 'guia' : 'usuario'),
      isGuia
    });

    res.cookie("token", token);
    res.json({
      success: true,
      message: "Login exitoso",
      data: {
        id: userFound._id,
        nombre: userFound.nombre,
        apellido_paterno: userFound.apellido_paterno,
        apellido_materno: userFound.apellido_materno,
        email: userFound.email,
        telefono: userFound.telefono,
        edad: userFound.edad,
        tipo_persona: userFound.id_tipo?.tipo_persona || (isGuia ? 'guia' : 'usuario'),
        isGuia,
        // Campos específicos si es guía
        ...(isGuia && {
          descripción: userFound.descripción,
          tarifa_hora: userFound.tarifa_hora,
          certificado_id: userFound.certificado_id,
          zona_turistica_id: userFound.zona_turistica_id,
          disponibilidad: userFound.disponibilidad,
          calificación: userFound.calificación
        }),
        createdAt: userFound.createdAt || userFound.create_at,
        updatedAt: userFound.updatedAt || userFound.update_at,
      }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Error en el login",
      error: error.message 
    });
  }
};

export const smartProfile = async (req, res) => {
  try {
    let userFound;
    let isGuia = false;

    // Buscar en usuarios primero
    userFound = await Usuario.findById(req.user.id).populate('id_tipo');
    
    if (!userFound) {
      // Si no está en usuarios, buscar en guías
      userFound = await Guia.findById(req.user.id).populate('id_tipo');
      isGuia = true;
    }

    if (!userFound) {
      return res.status(400).json({ 
        success: false,
        message: "Usuario no encontrado" 
      });
    }

    return res.json({
      success: true,
      data: {
        id: userFound._id,
        nombre: userFound.nombre,
        apellido_paterno: userFound.apellido_paterno,
        apellido_materno: userFound.apellido_materno,
        email: userFound.email,
        telefono: userFound.telefono,
        edad: userFound.edad,
        tipo_persona: userFound.id_tipo?.tipo_persona || (isGuia ? 'guia' : 'usuario'),
        isGuia,
        // Campos específicos si es guía
        ...(isGuia && {
          descripción: userFound.descripción,
          tarifa_hora: userFound.tarifa_hora,
          certificado_id: userFound.certificado_id,
          zona_turistica_id: userFound.zona_turistica_id,
          disponibilidad: userFound.disponibilidad,
          calificación: userFound.calificación
        }),
        createdAt: userFound.createdAt || userFound.create_at,
        updatedAt: userFound.updatedAt || userFound.update_at,
      }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Error al obtener perfil",
      error: error.message 
    });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });

  return res.json({
    success: true,
    message: "Logout exitoso"
  });
}; 