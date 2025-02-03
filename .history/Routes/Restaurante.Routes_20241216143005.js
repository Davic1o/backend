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

    // Buscar restaurantes por nombre (query params: ?name=<nombre>)
    app.get('/restaurantes/search', RestauranteController.searchRestauranteByName);

    // Filtrar restaurantes por categoría (query params: ?category=<categoría>)
    app.get('/restaurantes/filter', RestauranteController.filterRestaurantesByCategory);

    // Obtener restaurantes cercanos (query params: ?lat=<latitud>&lng=<longitud>&radius=<radio en km>)
    app.get('/restaurantes/nearby', RestauranteController.getNearbyRestaurantes);

    // Activar/desactivar un restaurante por su ID
    app.patch('/restaurantes/:id/toggle-status', RestauranteController.toggleRestauranteStatus);

    // Obtener estadísticas generales de restaurantes
    app.get('/restaurantes/statistics', RestauranteController.getRestauranteStatistics);
};
