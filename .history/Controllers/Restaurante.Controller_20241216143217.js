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


module.exports.getAllRestaurantes = async (req, res) => {
    try {
        const restaurantes = await Restaurante.find();
        res.status(200).json({
            restaurantes: restaurantes,
            message: "Lista de restaurantes obtenida correctamente",
        });
    } catch (error) {
        console.error("Error al obtener los restaurantes:", error);
        res.status(500).json({
            message: "Error al obtener los restaurantes",
            error: error.message,
        });
    }
};
module.exports.deleteRestauranteById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRestaurante = await Restaurante.findByIdAndDelete(id);

        if (!deletedRestaurante) {
            return res.status(404).json({
                message: "Restaurante no encontrado",
            });
        }

        res.status(200).json({
            restaurante: deletedRestaurante,
            message: "Restaurante eliminado correctamente",
        });
    } catch (error) {
        console.error("Error al eliminar el restaurante:", error);
        res.status(500).json({
            message: "Error al eliminar el restaurante",
            error: error.message,
        });
    }
};

