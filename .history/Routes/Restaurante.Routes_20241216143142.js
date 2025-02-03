const RestauranteController = require('../Controllers/Restaurante.Controller');
const express = require('express');

module.exports = function(app) {
    // Crear un nuevo restaurante
    app.post('/restaurantes', RestauranteController.createRestaurante);

    // Obtener todos los restaurantes
    app.get('/restaurantes', RestauranteController.getAllRestaurantes);

    // Obtener un restaurante por su ID
    app.get('/restaurantes/:id', RestauranteController.getRestauranteById);

    // Actualizar un restaurante por su ID
    app.put('/restaurantes/:id', RestauranteController.updateRestauranteById);

    // Eliminar un restaurante por su ID
    app.delete('/restaurantes/:id', RestauranteController.deleteRestauranteById);


};
