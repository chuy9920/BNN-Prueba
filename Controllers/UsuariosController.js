const Usuario = require('../Models/Usuarios');

function signIn(req, res) {
    console.log(req.body)
    Usuario.find({ usuario: req.body.usuario}, (err, usuario) => {
        if (err) return res.status(500).send({ message: err });

        if (!usuario) return res.status(400).send({ message: 'No existe el usuario' });

        // req.user = usuario;

        console.log(usuario)
        if (usuario.length == 0) return res.status(400).send({ 
            message: 'No existe el usuario',
            login: 0
        });
        res.status(200).send({
            message: 'Te has logueado correctamente',
            login: 1,
            usuario: usuario.usuario
         });
    });
}

function guardaUsuario(req, res) {
    var usuario = new Usuario();
    var params = req.body;

    usuario.usuario = params.usuario;
    usuario.contrasenia = params.contrasenia;

    usuario.save((err, usuarioGuardado) => {
        if (err) return res.status(500).send({ error: err});

        if (!usuarioGuardado) return res.status(404).send({ message: 'No se pudo guardar al usuario'});

        return res.status(200).send({ usuario: usuarioGuardado });
    });
}

module.exports = {
    signIn,
    guardaUsuario
}