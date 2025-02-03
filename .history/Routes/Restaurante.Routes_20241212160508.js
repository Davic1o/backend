const RestauranteController = require('../Controllers/Restaurante.Controller');
const express = require('express');

module.exports('/restaurantes', RestauranteController.createRestaurante)