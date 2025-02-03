const Restaurante = require('../Models/Restaurante.Model');
module.exports.createRestaurante = async (req, res) => {
    const restaurante = new Restaurante(req.body);
    await restaurante.save();
    try {
        res.status(201).json({
            restaurante: restaurante,
            message: "Restaurante creado"
        })
    } catch (error) {
        res.status(400).json({
            message: "Error al crear el restaurante"
        })
    }
   
}