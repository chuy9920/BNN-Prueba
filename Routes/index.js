const express = require('express');
const peliculaControl = require('../Controllers/PeliculaController');
const api = express.Router();

api.get('/pelicula', peliculaControl.obtenerPelicula);
api.get('/pelicula/:peliculaId', peliculaControl.obtenerUnaPelicula);
api.post('/pelicula', peliculaControl.guardaPelicula);
api.put('/pelicula/:peliculaId', peliculaControl.updatePelicula);
api.delete('/pelicula/:peliculaId', peliculaControl.deletePelicula);
// app.get('/', (req, res) => {
//     res.json({
//         text: 'API WORKS!'
//     });
// });

// app.post('/api/login', (req, res) => {
//     const user = {id: 3};
//     const token = jwt.sign({user}, 'my_secrect_key');
//     res.json({
//         token
//     });
// });

// app.get('/api/protected', ensureToken, (req, res) => {
//     jwt.verify(req.token, 'my_secrect_key', (err, data) => {
//         if (err) {
//             res.sendStatus(403);
//         } else {
//             res.json({
//                 text: 'protected',
//                 data
//             });
//         }
//     });
// });

// function ensureToken(req, res, next) {
//     const bearerHeader = req.headers['Authorization'];
//     console.log(bearerHeader);

//     if (typeof bearerHeader !== 'undefined') {
//         const bearer = bearerHeader.split(" ");
//         const bearerToken = bearer[1];
//         req.token = bearerToken;
//         next();
//     } else {
//         res.sendStatus(403);
//     }
// }
module.exports = api;