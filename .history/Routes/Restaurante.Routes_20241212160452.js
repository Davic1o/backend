const RestauranteController = require('../Controllers/Restaurante.Controller');
const express = require('express');
const router = express.Router();

module.exports('/restaurantes', RestauranteController.createRestaurante)