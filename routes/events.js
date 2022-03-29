// Event Routes
// /api/events
import { Router } from 'express';
import { getEventos, crearEvento, actualizarEvento, eliminarEvento } from '../controllers/events.js';
import validarJWT from '../middlewares/validar-jwt.js';
import { check } from 'express-validator';
import validarCampos from '../middlewares/validar-campos.js';
import isDate from '../helpers/isDate.js';


const routerEvent = Router();

//Todas tienen que pasar por la validacion del JWT
routerEvent.use(validarJWT);

routerEvent.get('/api/events',
    getEventos
);

routerEvent.post('/api/events',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha inicio es obligatoria').custom(isDate),
        check('end', 'Fecha fin es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento
);

routerEvent.put('/api/events/:id',
    actualizarEvento
);

routerEvent.delete('/api/events/:id',
    eliminarEvento
);

export default routerEvent;
