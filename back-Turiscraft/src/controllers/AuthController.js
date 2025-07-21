import Usuario from "../models/usuario.js";
import TipoUsuario from "../models/tipo_usuario.js";
import bcrypt from "bcryptjs";
import { createdAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { email, nombre, apellido_paterno, apellido_materno, telefono, edad, id_ubicación, tipo_persona = 'usuario' } = req.body;

  try {
    // Verificar si el email ya existe
    const existingUser = await Usuario.findOne({ email });
    if (existingUser) {
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

    const newUser = new Usuario({
      nombre,
      apellido_paterno,
      apellido_materno,
      email,
      telefono,
      edad: parseInt(edad) || 0,
      id_ubicación,
      id_tipo: tipoUsuario._id,
    });
    
    const userSaved = await newUser.save();
    
    const token = await createdAccessToken({ 
      id: userSaved._id, 
      tipo_persona: tipoUsuario.tipo_persona 
    });

    res.cookie("token", token);
    res.status(201).json({
      success: true,
      message: "Usuario registrado exitosamente",
      data: {
        id: userSaved._id,
        nombre: userSaved.nombre,
        apellido_paterno: userSaved.apellido_paterno,
        apellido_materno: userSaved.apellido_materno,
        email: userSaved.email,
        tipo_persona: tipoUsuario.tipo_persona,
        createdAt: userSaved.createdAt,
        updatedAt: userSaved.updatedAt,
      }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: "Error al registrar usuario",
      error: error.message 
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await Usuario.findOne({ email }).populate('id_tipo');
    if (!userFound) {
      return res.status(400).json({ 
        success: false,
        message: "Credenciales inválidas, intenta de nuevo" 
      });
    }

    // Como no tienes campo password en tu tabla usuario, esto necesitaría ajuste
    // Por ahora asumimos que el login es solo por email
    const token = await createdAccessToken({ 
      id: userFound._id, 
      tipo_persona: userFound.id_tipo?.tipo_persona || 'usuario' 
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
        tipo_persona: userFound.id_tipo?.tipo_persona || 'usuario',
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
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

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });

  return res.json({
    success: true,
    message: "Logout exitoso"
  });
};

export const profile = async (req, res) => {
  try {
    const userFound = await Usuario.findById(req.user.id).populate('id_tipo');

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
        tipo_persona: userFound.id_tipo?.tipo_persona || 'usuario',
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
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

