const express = require('express');
const router = express.Router();
const {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor
} = require('../controllers/authorController');

/**
 * ESCUELA DE TECNOLOGÍA DE INFORMACIÓN
 * SEMINARIO DE COMPLEMENTACIÓN II 
 * Instructor: Mg. Ing. Carlos Sánchez Villarreal
 */

// ============ RUTAS REST PARA AUTORES ============

// Obtener todos los autores
router.get('/', getAuthors); 

// Obtener un autor por su ID
router.get('/:id', getAuthorById); 

// Crear un nuevo autor
router.post('/', createAuthor); 

// Actualizar un autor existente
router.put('/:id', updateAuthor); 

// Eliminar un autor
router.delete('/:id', deleteAuthor); 

module.exports = router;