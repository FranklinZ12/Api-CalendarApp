import express from 'express';
import dotenv from "dotenv";
import router from './routes/auth.js';
import dbConnection from './database/config.js';
import cors from "cors";
import routerEvent from './routes/events.js';

//VARIABLES DE ENTORNO
dotenv.config();

//ACTIVACIÓN DE EXPRESS
const app = express();

//Base de datos
dbConnection();

//ACTIVACIÓN DE CORS
app.use(cors());

// Directorio Público
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

app.use(router);

app.use(routerEvent)



//CONFIGURACIÓN DE SERVIDOR
app.listen({ port: process.env.PORT || 4000 }, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});