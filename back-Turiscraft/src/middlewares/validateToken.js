import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const authRequired = (req, res, next) => {
    const { token } = req.cookies;

    if(!token) 
        return res.status(401).json({ 
            success: false,
            message: 'Acceso denegado, no se proporcionó token' 
        });

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err)
            return res.status(403).json({ 
                success: false,
                message: "Token inválido" 
            });

        req.user = user;
        next();
    })
}

// Alias para mantener compatibilidad
export const validateToken = authRequired;

// Middleware para validar roles específicos
export const validateRole = (allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: 'Acceso denegado, autenticación requerida'
            });
        }

        if (!req.user.tipoRoll) {
            return res.status(403).json({
                success: false,
                message: 'Rol no definido en el token'
            });
        }

        if (!allowedRoles.includes(req.user.tipoRoll)) {
            return res.status(403).json({
                success: false,
                message: 'Acceso denegado, permisos insuficientes'
            });
        }

        next();
    };
};

// Middleware específico para guías
export const validateGuia = validateRole(['guias']);

// Middleware específico para usuarios
export const validateUsuario = validateRole(['usuario']);

// Middleware para cualquier rol autenticado
export const validateAnyRole = validateRole(['guias', 'usuario']);