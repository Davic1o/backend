const RestauranteController = require('../Controllers/Restaurante.Controller');
const AuthController = require('../Controllers/Autenticacion.Controller');
const express = require('express');
const {protect} = require('../midleware/protect');

module.exports = function(app) {
    app.post('/restaurantes',protect, RestauranteController.createRestaurante);
    app.get('/restaurantes', RestauranteController.getAllRestaurantes);
    app.delete('/restaurantes/:id', RestauranteController.deleteRestauranteById);
    app.put('/restaurantes/:id', RestauranteController.updateRestauranteById);
    app.get('/restaurantes/:id', RestauranteController.getRestauranteById);
    app.post('/login', AuthController.login);
    app.post('/register', AuthController.register);

};
