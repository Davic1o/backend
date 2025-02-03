const Restaurante = require('../Models/Restaurante.Model');

module.exports.createRestaurante = async (req, res) => {
    try {
        const restaurante = new Restaurante(req.body);
        await restaurante.save(); // Podría lanzar un error, así que está dentro del try

        res.status(201).json({
            restaurante: restaurante,
            message: "Restaurante creado",
        });
    } catch (error) {
        console.error("Error al crear el restaurante:", error); // Útil para depurar
        res.status(400).json({
            message: "Error al crear el restaurante",
            error: error.message, // Opcional: proporciona más contexto del error
        });
    }
};
