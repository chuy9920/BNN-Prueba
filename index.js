
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const app = require('./app');

mongoose.connect('mongodb+srv://admin:admin@cluster0-bdiab.mongodb.net/test?retryWrites=true&w=majority')
    .then(db => console.log('db is connected'))
    .catch(err => console.log(err));

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});

