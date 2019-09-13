const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    usuario: String,
    contrasenia: { type: String, select: false }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);