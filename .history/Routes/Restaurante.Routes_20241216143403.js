const RestauranteController = require('../Controllers/Restaurante.Controller');
const express = require('express');

module.exports = function(app) {
    // Crear un nuevo restaurante
    app.post('/restaurantes', RestauranteController.createRestaurante);

    app.get('/restaurantes', RestauranteController.getAllRestaurantes);

    app.delete('/restaurantes/:id', RestauranteController.deleteRestauranteById);

};
