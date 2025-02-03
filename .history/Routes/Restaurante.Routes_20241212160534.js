const RestauranteController = require('../Controllers/Restaurante.Controller');
const express = require('express');

module.exports = function(app){
    app.post('/restaurantes', RestauranteController.createRestaurante)
    
}