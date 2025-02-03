const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
Email:{
    type: String,
    required:[ true, "El restaurante debe tener un nombre"]
},
Password:{
    type: String,
    required:[ true, "El restaurante debe tener un tipo"]
},
});
const Usuario = mongoose.model('Usuario', UserSchema);        
module.exports = Usuario;