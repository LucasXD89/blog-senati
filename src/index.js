const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Importar rutas
const authorRoutes = require('./routes/authorRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
// MIDDLEWARES
app.use(cors()); // Permite peticiones de otros dominios
app.use(express.json()); // Convierte JSON automáticamente
app.use(express.urlencoded({ extended: true }));
// Conexion a mongodb
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error conectando a MongoDB:', err.message));
// Rutas de bienvenida
app.get('/', (req, res) => {
  res.json({
    name: 'SENATI Blog API',
    institution: 'ESCUELA DE TECNOLOGÍA DE INFORMACIÓN',
    course: 'SEMINARIO DE COMPLEMENTACIÓN II',
    instructor: 'Mg. Ing. Carlos Sánchez Villarreal',
    version: '1.0.0',
    status: 'online',
    endpoints: {
      authors: '/api/authors',
      posts: '/api/posts'
    }
  });
});

// ============ RUTAS DE LA API ============
app.use('/api/authors', authorRoutes);
app.use('/api/posts', postRoutes);

// ============ MANEJO DE ERRORES 404 ============
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint no encontrado'
  });
});

// ============ INICIAR SERVIDOR ============
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});