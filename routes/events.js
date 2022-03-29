// Event Routes
// /api/events
import { Router } from 'express';
import { getEventos, crearEvento, actualizarEvento, eliminarEvento } from '../controllers/events.js';
import validarJWT from '../middlewares/validar-jwt.js';


const routerEvent = Router();

//Todas tienen que pasar por la validacion del JWT
routerEvent.use(validarJWT);

routerEvent.get('/api/events',
    getEventos
);

routerEvent.post('/api/events',
    crearEvento
);

routerEvent.put('/api/events/:id',
    actualizarEvento
);

routerEvent.delete('/api/events/:id',
    eliminarEvento
);

export default routerEvent;
