import { Router } from 'express';
import { 
  smartRegister, 
  smartLogin, 
  smartProfile, 
  logout 
} from '../controllers/SmartAuthController.js';
import { authRequired } from '../middlewares/validateToken.js';

const router = Router();

// Rutas de autenticación inteligente
router.post('/register', smartRegister);
router.post('/login', smartLogin);
router.post('/logout', logout);
router.get('/profile', authRequired, smartProfile);

export default router; 