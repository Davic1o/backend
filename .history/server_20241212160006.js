const express = require('express');
const app = express();
const port =8000;
require('./config/Mongoose.config');
app.use(express.json(), express.urlencoded({ extended: true }));
const Rutas= require('./Routes/Restaurante.Routes')(app);


app.listen(port, () => console.log(`Listening on port: ${port}`));