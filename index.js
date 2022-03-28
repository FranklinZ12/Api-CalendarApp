import express from 'express';
import dotenv from "dotenv";
import router from './routes/auth.js';
//VARIABLES DE ENTORNO
dotenv.config();
//ACTIVACIÓN DE EXPRESS
const app = express();

app.use(router);

// Directorio Público
app.use(express.static('public'));

//CONFIGURACIÓN DE SERVIDOR
app.listen({ port: process.env.PORT || 4000 }, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});