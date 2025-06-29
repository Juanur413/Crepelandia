import { getDBConnection } from './models/db.js';

const limpiarTabla = async () => {
  const db = await getDBConnection();
  await db.run('DELETE FROM productos');
  console.log('✅ Todos los productos han sido eliminados.');
  await db.close();
};

limpiarTabla();
