const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Restaurantes' ).then(() => {
    console.log('Conectado a la base de datos');
}).catch((error) => {
    console.log(error);
});