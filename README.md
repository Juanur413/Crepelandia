# Crepelandia - Sistema de Gestión de Productos

Un sistema web completo para la gestión de productos de Crepelandia, con frontend en HTML/CSS/JavaScript y backend en Node.js con Express y SQLite.

## 🚀 Características

- **Frontend**: Interfaz moderna y responsiva
- **Backend**: API REST con Node.js y Express
- **Base de Datos**: SQLite para almacenamiento local
- **Funcionalidades**:
  - Visualización de productos
  - Creación de nuevos productos
  - Validación de datos
  - Manejo de errores robusto

## 📋 Requisitos Previos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)

## 🛠️ Instalación

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd Crepelandia
```

### 2. Instalar dependencias del backend
```bash
cd backend
npm install
```

### 3. Inicializar la base de datos
```bash
node init_db.js
```

### 4. Instalar dependencias del frontend (opcional)
```bash
cd ..
npm install
```

## 🚀 Ejecución

### 1. Iniciar el servidor backend
```bash
cd backend
npm start
```

El servidor se ejecutará en `http://localhost:3000`

### 2. Acceder al frontend
Abre tu navegador y ve a `http://localhost:3000`

## 📁 Estructura del Proyecto

```
Crepelandia/
├── backend/
│   ├── controllers/
│   │   └── products.controller.js
│   ├── models/
│   │   └── db.js
│   ├── routes/
│   │   └── productos.routes.js
│   ├── app.js
│   ├── server.js
│   ├── init_db.js
│   ├── package.json
│   └── crepelandia.db
├── public/
│   ├── css/
│   │   ├── estilos.css
│   │   └── normalize.css
│   ├── js/
│   │   ├── config.js
│   │   ├── menu.js
│   │   ├── crear_producto.js
│   │   ├── questions.js
│   │   └── slider.js
│   ├── images/
│   ├── index.html
│   └── crear_producto.html
├── package.json
└── README.md
```

## 🔧 API Endpoints

### Productos
- `GET /productos` - Obtener todos los productos
- `POST /productos` - Crear un nuevo producto
- `PUT /productos/:id` - Actualizar un producto
- `DELETE /productos/:id` - Eliminar un producto

### Formato de Producto
```json
{
  "nombre": "Nombre del producto",
  "descripcion": "Descripción del producto",
  "precio": 15000,
  "categoria": "salado|dulce|bebida",
  "imagen_url": "./images/producto.jpg"
}
```

## 🎨 Funcionalidades del Frontend

### Página Principal (`index.html`)
- Visualización de productos desde la base de datos
- Navegación responsiva
- Secciones informativas sobre Crepelandia

### Crear Producto (`crear_producto.html`)
- Formulario para crear nuevos productos
- Validación de campos
- Integración con la API del backend

## 🔍 Solución de Problemas

### Error de conexión a la base de datos
1. Verifica que el archivo `crepelandia.db` existe en la carpeta `backend/`
2. Ejecuta `node init_db.js` para recrear la base de datos

### Error de CORS
- El backend ya incluye configuración CORS
- Verifica que el servidor esté ejecutándose en el puerto 3000

### Productos no se cargan
1. Verifica que el servidor backend esté ejecutándose
2. Revisa la consola del navegador para errores
3. Verifica que la base de datos contenga productos

## 🛠️ Desarrollo

### Agregar nuevas funcionalidades
1. Crea nuevos endpoints en `backend/routes/`
2. Implementa la lógica en `backend/controllers/`
3. Actualiza el frontend en `public/js/`

### Modificar estilos
- Los estilos principales están en `public/css/estilos.css`
- Usa `public/css/normalize.css` para reset de estilos

## 📝 Notas

- La aplicación usa SQLite como base de datos local
- Las imágenes deben estar en la carpeta `public/images/`
- El servidor sirve archivos estáticos desde la carpeta `public/`

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles. 