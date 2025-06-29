import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import productosRoutes from './routes/productos.routes.js';

// Resolver __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware generales
app.use(cors());
app.use(express.json());

// Servir archivos estáticos de /public
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

// Ruta para servir index.html en la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// Rutas API
app.use('/productos', productosRoutes);

export default app;
