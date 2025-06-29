import { getDBConnection } from './models/db.js';

const createTable = async () => {
  try {
    const db = await getDBConnection();
    
    // Crear tabla si no existe
    await db.exec(`
      CREATE TABLE IF NOT EXISTS productos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        descripcion TEXT NOT NULL,
        precio REAL NOT NULL,
        categoria TEXT NOT NULL,
        imagen_url TEXT NOT NULL
      );
    `);
    
    console.log('✅ Base de datos y tabla creadas exitosamente');
    
    // Verificar si ya hay productos
    const productos = await db.all('SELECT COUNT(*) as count FROM productos');
    
    if (productos[0].count === 0) {
      // Insertar productos de ejemplo
      const productosEjemplo = [
        {
          nombre: 'Crepe Ranchero',
          descripcion: 'Una explosión de sabor colombiano en cada bocado. Relleno con trozos jugosos de pollo, salchicha, tocineta crocante, champiñones salteados, maíz tierno y queso fundido con amor a la plancha.',
          precio: 15000,
          categoria: 'salado',
          imagen_url: './images/crepe-ranchero.jpg'
        },
        {
          nombre: 'Papalandia',
          descripcion: 'Cama de papas crocantes, bañadas en queso fundido, salsa tártara y BBQ, con coronación de papas criollas crocantes al mejor estilo Crepelandia.',
          precio: 16000,
          categoria: 'salado',
          imagen_url: './images/papalandia.jpg'
        },
        {
          nombre: 'Hamburguesa Artesanal',
          descripcion: 'La reina de la casa. Jugosa, contundente y 100% artesanal. Pan brioche, doble carne sazonada al punto, queso derretido, vegetales frescos, tocineta crujiente y salsas caseras.',
          precio: 23000,
          categoria: 'salado',
          imagen_url: './images/Hamburguesa-artesanal.jpg'
        }
      ];
      
      for (const producto of productosEjemplo) {
        await db.run(
          'INSERT INTO productos (nombre, descripcion, precio, categoria, imagen_url) VALUES (?, ?, ?, ?, ?)',
          [producto.nombre, producto.descripcion, producto.precio, producto.categoria, producto.imagen_url]
        );
      }
      
      console.log('✅ Productos de ejemplo insertados exitosamente');
    } else {
      console.log('ℹ️  La base de datos ya contiene productos');
    }
    
    await db.close();
    
  } catch (error) {
    console.error('❌ Error al inicializar la base de datos:', error);
    process.exit(1);
  }
};

createTable();
