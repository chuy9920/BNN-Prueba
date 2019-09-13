const mongoose = require('mongoose');

const { Schema } = mongoose;

const PeliculaSchema = new Schema({
    titulo: String,
    director: String,
    duracion: String,
    inicioExhibicion: Date,
    finExhibicion: Date
});

module.exports = mongoose.model('Pelicula', PeliculaSchema);