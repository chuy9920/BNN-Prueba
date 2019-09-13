const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    usuario: String,
    password: { type: String, select: false }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);