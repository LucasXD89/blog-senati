const express = require('express');
const router = express.Router();
const {
  getPosts,
  getPostById,
  getPostsByAuthor,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/postController');

/**
 * ESCUELA DE TECNOLOGÍA DE INFORMACIÓN
 * SEMINARIO DE COMPLEMENTACIÓN II 
 * Instructor: Mg. Ing. Carlos Sánchez Villarreal
 */

// ============ RUTAS REST PARA ARTÍCULOS ============

// Obtener todos los artículos
router.get('/', getPosts); 

// Obtener un artículo por su ID
router.get('/:id', getPostById); 

// Obtener todos los artículos de un autor específico
router.get('/author/:authorId', getPostsByAuthor); 

// Crear un nuevo artículo
router.post('/', createPost); 

// Actualizar un artículo existente
router.put('/:id', updatePost); 

// Eliminar un artículo
router.delete('/:id', deletePost); 

module.exports = router;