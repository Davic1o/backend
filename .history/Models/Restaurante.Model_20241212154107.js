const mongoose = require('mongoose');
const RestauranteSchema = new mongoose.Schema({
Nombre:{
    type: String,
    required:[ true, "El restaurante debe tener un nombre"]
},
Tipo:{
    type: String,
    required:[ true, "El restaurante debe tener un tipo"]
},
Horario:{
    type: String,
    required:[ true, "El restaurante debe tener un horario"]
},
Url:{
    type: String,
    required:[ true, "El restaurante debe tener una url"]
}
});
const Restaurante = mongoose.model('Restaurante', RestauranteSchema);        
module.exports = Restaurante;