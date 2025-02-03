const RestauranteController = require('../Controllers/Restaurante.Controller');
const express = require('express');
const router = express.Router();

router.post('/restaurantes', RestauranteController.createRestaurante);

module.exports = router;