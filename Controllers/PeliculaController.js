const Pelicula = require('../Models/Pelicula');
function obtenerPelicula(req, res) {
    Pelicula.find({}, (err, peliculas) => {
        if (err) return res.status(400).send({ message: 'Error al obtener los datos'});

        if (!peliculas) return res.status(404).send({message: 'No hay pelúculas'});

        res.status(200).send({peliculas});
    });
}

function obtenerUnaPelicula(req, res) {
    let peliculaId = req.params.peliculaId;
    Pelicula.findById(peliculaId, (err, pelicula) => {
        if(err) return res.status(500).send({message: 'Error al devolver los datos' + err});

        if(!pelicula) return res.status(404).send({message: 'El documento no existe'});

        return res.status(200).send({
            pelicula
        });
    });
}

function guardaPelicula(req, res) {
    var pelicula = new Pelicula();
    var params = req.body;

    pelicula.titulo = params.titulo;
    pelicula.director = params.director;
    pelicula.duracion = params.duracion;
    pelicula.inicioExhibicion = new Date(params.inicioExhibicion);
    pelicula.finExhibicion = new Date(params.finExhibicion);

    console.log(Date.parse(params.inicioExhibicion));

    pelicula.save((err, peliculaSaved) => {
        if (err) return res.status(500).send({error: 'No se pudo guardar la pelicula: ' + err});

        if (!peliculaSaved) return res.status(404).send({message: 'No se ha podido guardar el usuario'});

        return res.status(200).send({ pelicula: peliculaSaved});
    });
}

function updatePelicula (req, res) {
    let peliculaId = req.params.peliculaId;
    let update = req.body;

    console.log(update)
    Pelicula.findByIdAndUpdate(peliculaId, update, (err, peliculaActualizada) => {
        if (err) res.status(500).send({ message: `Error al actualizar la pelicula: ${err}`});

        res.status(200).send({ pelicula: peliculaActualizada});

    });
}

function deletePelicula (req, res) {
    let peliculaId = req.params.peliculaId;

    Pelicula.findByIdAndRemove(peliculaId, (err, peliculaEliminada) => {
        if(err) return res.status(500).send({ message: `No se pudo eliminar la pelicula: ${err}`});

        if (!peliculaEliminada) return status(404).send({ message: 'No se encontró la pelicula'});

        res.status(200).send({
            pelicula: peliculaEliminada
        });
    });
}

module.exports = {
    obtenerPelicula,
    obtenerUnaPelicula,
    guardaPelicula,
    updatePelicula,
    deletePelicula
}