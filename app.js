const http = require('http');
const path = require('path');

///////////// Modificaciones \\\\\\\\\\\\\\\
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');

const api = require('./Routes/index');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// app.engine('.hbs', hbs({
//     defaultLayout: 'default',
//     extname: '.hbs'
// }));

// app.set('view engine', '.hbs');

app.use('/api', api);
// app.use('/login', (req, res) => {
//     res.render('/login');
// });

app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', (req, res) => {
//     res.render('/login');
// });

// app.use('/peliculas', (req, res) => {
//     res.render('/peliculas');
// });

// app.use('/form', (req, res) => {
//     res.render('form');
// });

module.exports = app;