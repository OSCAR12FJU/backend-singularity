import jwt from 'jsonwebtoken';

const SECRET_KEY = 'mi_secreto_super_seguro'; // Cambiar por una variable de entorno

export const jwtService = {
  generateToken: (payload) => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  },
  verifyToken: (token) => {
    try {
      return jwt.verify(token, SECRET_KEY);
    } catch(error) {
      throw new Error('Token inválido',error);
    }
  },
};

