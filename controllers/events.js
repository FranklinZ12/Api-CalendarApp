import { response } from "express";
import { ModeloEvento } from "../models/Evento.js";

const getEventos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'getEventos'
    })
}

const crearEvento = async (req, res = response) => {
    const evento = new ModeloEvento(req.body);
    try {
        evento.user = req.uid;
        const eventoGuardado = await evento.save();
        res.json({
            ok: true,
            evento: eventoGuardado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado en eventos'
        });
    }
}

const actualizarEvento = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'actualizarEvento'
    })
}

const eliminarEvento = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'eliminarEvento'
    })
}

export { getEventos, crearEvento, actualizarEvento, eliminarEvento };