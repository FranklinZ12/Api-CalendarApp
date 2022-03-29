import { response } from "express";
import { ModeloEvento } from "../models/Evento.js";

const getEventos = async (req, res = response) => {
    const eventos = await ModeloEvento.find()
        .populate('user', 'name')

    res.json({
        ok: true,
        eventos
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

const actualizarEvento = async (req, res = response) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {
        const evento = await ModeloEvento.findById(eventoId);
        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no encontrado por el id'
            });
        };

        if (evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No autorizado para editar eventos'
            });
        };

        const nuevoEvento = {
            ...req.body,
            user: uid
        };

        const eventoActualizado = await ModeloEvento.findByIdAndUpdate(eventoId, nuevoEvento, { new: true });

        res.json({
            ok: true,
            evento: eventoActualizado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado en ActualizarEventos'
        })
    }
}

const eliminarEvento = async (req, res = response) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {
        const evento = await ModeloEvento.findById(eventoId);
        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: 'Evento no encontrado por el id'
            });
        };

        if (evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No autorizado para eliminar eventos'
            });
        };

        await ModeloEvento.findByIdAndDelete(eventoId);

        res.json({
            ok: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado en EliminarEventos'
        })
    }
}

export { getEventos, crearEvento, actualizarEvento, eliminarEvento };