import { response } from "express";
import { validationResult } from 'express-validator';
const crearUsuario = (req, res = response) => {
    const { name, email, password } = req.body;
    //manejo de errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errores: errores.mapped()
        });
    }
    res.status(201).json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password
    });
}

const loginUsuario = (req, res = response) => {
    const { email, password } = req.body;
    //manejo de errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errores: errores.mapped()
        });
    }
    res.status(202).json({
        ok: true,
        msg: 'login',
        email,
        password
    });
}

const revalidarToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
}

export { crearUsuario, loginUsuario, revalidarToken };