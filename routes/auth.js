// Rutas de usuarios/auth
// host + /api/auth
import { Router } from 'express';
import { crearUsuario, loginUsuario, revalidarToken } from '../controllers/auth.js';
import { check } from 'express-validator';
const router = Router();

router.post('/api/auth/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres o mas').isLength({ min: 6 }),
    ],
    crearUsuario
);

router.post('/api/auth/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres o mas').isLength({ min: 6 }),
    ],
    loginUsuario);

router.get('/api/auth/renew', revalidarToken);

export default router;