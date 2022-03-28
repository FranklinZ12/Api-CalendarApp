// Rutas de usuarios/auth
// host + /api/auth
import { Router } from 'express';
import { crearUsuario, loginUsuario, revalidarToken } from '../controllers/auth.js';

const router = Router();

router.post('/api/auth/new', crearUsuario);

router.post('/api/auth/', loginUsuario);

router.get('/api/auth/renew', revalidarToken);

export default router;