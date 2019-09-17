const express = require('express');
const peliculaControl = require('../Controllers/PeliculaController');
const usuarioControl = require('../Controllers/UsuariosController');
const api = express.Router();

api.get('/pelicula', peliculaControl.obtenerPelicula);
api.get('/pelicula/:peliculaId', peliculaControl.obtenerUnaPelicula);
api.post('/pelicula', peliculaControl.guardaPelicula);
api.put('/pelicula/:peliculaId', peliculaControl.updatePelicula);
api.delete('/pelicula/:peliculaId', peliculaControl.deletePelicula);

api.post('/usuarios',usuarioControl.signIn);
api.post('/usuario', usuarioControl.guardaUsuario);
module.exports = api;