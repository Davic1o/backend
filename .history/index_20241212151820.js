const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Restaurantes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});