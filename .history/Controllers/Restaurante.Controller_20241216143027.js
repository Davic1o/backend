const Restaurante = require('../Models/Restaurante.Model');

// Obtener restaurante por ID
module.exports.getRestauranteById = async (req, res) => {
    try {
        const { id } = req.params;
        const restaurante = await Restaurante.findById(id);

        if (!restaurante) {
            return res.status(404).json({
                message: "Restaurante no encontrado",
            });
        }

        res.status(200).json({
            restaurante: restaurante,
            message: "Restaurante obtenido correctamente",
        });
    } catch (error) {
        console.error("Error al obtener el restaurante:", error);
        res.status(500).json({
            message: "Error al obtener el restaurante",
            error: error.message,
        });
    }
};

// Actualizar un restaurante por ID
module.exports.updateRestauranteById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRestaurante = await Restaurante.findByIdAndUpdate(id, req.body, {
            new: true, // Devuelve el documento actualizado
            runValidators: true, // Ejecuta las validaciones del modelo
        });

        if (!updatedRestaurante) {
            return res.status(404).json({
                message: "Restaurante no encontrado",
            });
        }

        res.status(200).json({
            restaurante: updatedRestaurante,
            message: "Restaurante actualizado correctamente",
        });
    } catch (error) {
        console.error("Error al actualizar el restaurante:", error);
        res.status(400).json({
            message: "Error al actualizar el restaurante",
            error: error.message,
        });
    }
};

// Buscar restaurantes por nombre
module.exports.searchRestauranteByName = async (req, res) => {
    try {
        const { name } = req.query;
        const restaurantes = await Restaurante.find({ name: { $regex: name, $options: 'i' } });

        res.status(200).json({
            restaurantes: restaurantes,
            message: "Búsqueda de restaurantes completada",
        });
    } catch (error) {
        console.error("Error al buscar restaurantes:", error);
        res.status(500).json({
            message: "Error al buscar restaurantes",
            error: error.message,
        });
    }
};

// Filtrar restaurantes por categoría
module.exports.filterRestaurantesByCategory = async (req, res) => {
    try {
        const { category } = req.query;
        const restaurantes = await Restaurante.find({ category });

        res.status(200).json({
            restaurantes: restaurantes,
            message: "Restaurantes filtrados por categoría",
        });
    } catch (error) {
        console.error("Error al filtrar restaurantes:", error);
        res.status(500).json({
            message: "Error al filtrar restaurantes",
            error: error.message,
        });
    }
};

// Obtener restaurantes cercanos (lat, lng, radius en km)
module.exports.getNearbyRestaurantes = async (req, res) => {
    try {
        const { lat, lng, radius } = req.query;

        const restaurantes = await Restaurante.find({
            location: {
                $geoWithin: {
                    $centerSphere: [[lng, lat], radius / 6378.1], // Radio en kilómetros
                },
            },
        });

        res.status(200).json({
            restaurantes: restaurantes,
            message: "Restaurantes cercanos obtenidos",
        });
    } catch (error) {
        console.error("Error al obtener restaurantes cercanos:", error);
        res.status(500).json({
            message: "Error al obtener restaurantes cercanos",
            error: error.message,
        });
    }
};

// Activar/desactivar un restaurante
module.exports.toggleRestauranteStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const restaurante = await Restaurante.findById(id);

        if (!restaurante) {
            return res.status(404).json({
                message: "Restaurante no encontrado",
            });
        }

        restaurante.isActive = !restaurante.isActive;
        await restaurante.save();

        res.status(200).json({
            restaurante: restaurante,
            message: `Restaurante ${restaurante.isActive ? 'activado' : 'desactivado'}`,
        });
    } catch (error) {
        console.error("Error al cambiar el estado del restaurante:", error);
        res.status(500).json({
            message: "Error al cambiar el estado del restaurante",
            error: error.message,
        });
    }
};

// Obtener estadísticas generales de los restaurantes
module.exports.getRestauranteStatistics = async (req, res) => {
    try {
        const total = await Restaurante.countDocuments();
        const active = await Restaurante.countDocuments({ isActive: true });
        const inactive = total - active;

        res.status(200).json({
            statistics: { total, active, inactive },
            message: "Estadísticas obtenidas correctamente",
        });
    } catch (error) {
        console.error("Error al obtener estadísticas:", error);
        res.status(500).json({
            message: "Error al obtener estadísticas",
            error: error.message,
        });
    }
};
