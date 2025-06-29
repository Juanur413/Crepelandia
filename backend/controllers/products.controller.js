import { getDBConnection } from '../models/db.js';

export async function getProductos(_, res) {
    try {
        const db = await getDBConnection();
        const productos = await db.all('SELECT * FROM productos ORDER BY id DESC');
        res.json(productos);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export async function createProducto(req, res) {
    try {
        const { nombre, descripcion, precio, categoria, imagen_url } = req.body;
        
        // Validación de datos
        if (!nombre || !descripcion || !precio || !categoria || !imagen_url) {
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }
        
        if (typeof precio !== 'number' || precio <= 0) {
            return res.status(400).json({ error: 'El precio debe ser un número positivo' });
        }
        
        const db = await getDBConnection();
        const result = await db.run(
            'INSERT INTO productos (nombre, descripcion, precio, categoria, imagen_url) VALUES (?, ?, ?, ?, ?)',
            [nombre, descripcion, precio, categoria, imagen_url]
        );
        
        res.status(201).json({ 
            mensaje: 'Producto creado exitosamente',
            id: result.lastID 
        });
    } catch (error) {
        console.error('Error al crear producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export async function updateProducto(req, res) {
    try {
        const { id } = req.params;
        const { nombre, descripcion, precio, categoria, imagen_url } = req.body;
        
        // Validación de datos
        if (!nombre || !descripcion || !precio || !categoria || !imagen_url) {
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }
        
        if (typeof precio !== 'number' || precio <= 0) {
            return res.status(400).json({ error: 'El precio debe ser un número positivo' });
        }
        
        const db = await getDBConnection();
        const result = await db.run(
            'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, categoria = ?, imagen_url = ? WHERE id = ?',
            [nombre, descripcion, precio, categoria, imagen_url, id]
        );
        
        if (result.changes === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        
        res.json({ mensaje: 'Producto actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export async function deleteProducto(req, res) {
    try {
        const { id } = req.params;
        const db = await getDBConnection();
        const result = await db.run('DELETE FROM productos WHERE id = ?', id);
        
        if (result.changes === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        
        res.json({ mensaje: 'Producto eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
