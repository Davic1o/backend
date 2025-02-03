const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/restaurantes').then(() => {
    console.log('Conectado a la base de datos');
}).catch((error) => {
    console.log(error);
});