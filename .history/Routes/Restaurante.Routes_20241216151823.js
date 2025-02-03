const RestauranteController = require('../Controllers/Restaurante.Controller');
const express = require('express');

module.exports = function(app) {
    app.post('/restaurantes', RestauranteController.createRestaurante);
    app.get('/restaurantes', RestauranteController.getAllRestaurantes);
    app.delete('/restaurantes/:id', RestauranteController.deleteRestauranteById);
    app.put('/restaurantes/:id', RestauranteController.updateRestauranteById);
    app.get('/restaurantes/:id', RestauranteController.getRestauranteById);

};
