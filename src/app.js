import express from 'express';
import morgan from 'morgan'; // para revisar en consola las solicitudes http (opcional)

const app = express();
app.use(morgan('dev'));

export default app;