const UserController = require('../Controllers/User.Controller');
const express = require('express');
const router = express.Router();

router.get('/api/restaurantes', (req, res) => {
    res.status(200).json({
        message: "Hello World"
    })
})