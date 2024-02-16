import express from 'express';
import morgan from 'morgan'; // para revisar en consola las solicitudes http (opcional)
import cors from 'cors';
import videoRoutes from './routes/video.routes.js';

const app = express();

app.use(cors()); // permite que todos los dominios se comuniquen en el mismo servidor
app.use(morgan('dev'));
app.use(express.json()); // middleware que permite leer request.body a formato js

app.use(videoRoutes);

export default app;