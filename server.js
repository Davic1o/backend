const express = require('express');
const cors = require('cors');  // Importar cors
const app = express();
const port = 8000;
require('./config/Mongoose.config');

// Usar cors antes de las rutas para habilitarlo en toda la app
app.use(cors());

// Configurar body parsers
app.use(express.json(), express.urlencoded({ extended: true }));

// Definir las rutas
const Rutas = require('./Routes/Restaurante.Routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
