require("dotenv").config();
const jwt = require('jsonwebtoken');
const User = require('../Models/Usuario.Model');
module.exports.protect = async (req, res, next) =>{
let token;
if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
try {
//se obtiene el token (p.ej., Bearer DJDHFHFHHFHFHF#%>%)
token = req.headers.authorization;
console.log('Token recibido-con Bearer: ', token);
token = token.split(' ')[1];
console.log('Token extraído: ', token);
//se verifica el token
const decoded = jwt.verify(token, "process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjMzNDZlMGI0NmZhODEwYmQ1ZmFmNSIsIkVtYWlsIjoiZGF2aWNpb3MiLCJpYXQiOjE3MzYxOTU5NTUsImV4cCI6MTczNjE5OTU1NX0.3tnzJwzGWK15keVJDpsdX0SwczgRm8ASCLfX3vXLvLg");
//agregamos a cada petición información del usuario - excepto el password (recuperado con base en el _id //contenido en el payload del token)
req.user = await User.findOne({_id: decoded.id}).select('-Password');
next();
} catch (error) {
res.status(401).json({message: 'Not authorized!'});
}
}
//si no se tienen un token de portador, entonces no estará autorizado
if(!token){
res.status(401).json({message: 'Not authorized, missed token!'});
}
}