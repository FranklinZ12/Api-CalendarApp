// Rutas de usuarios/auth
// host + /api/auth

import { Router } from 'express';

const router = Router();

router.get('/api/auth', (req, res) => {
    res.json({
        ok: true
    });
});

export default router;