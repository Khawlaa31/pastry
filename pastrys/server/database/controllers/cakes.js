const { Cakes } = require("../models");

module.exports = {
  getAllCakes: async (req, res) => {
    try {
      const cakes = await Cakes.findAll();
      res.json(cakes);
    } catch (error) {
      res.status(500).json({ error: "error fetching cakes." });
    }
  },

  getCakesById: async (req, res) => {
    try {
      const cakes = await Cakes.findByPk(req.params.id);
      if (cakes) {
        res.json(cakes);
      } else {
        res.status(404).json({ error: "Cakes not found." });
      }
    } catch (error) {
      res.status(500).json({ error: "error fetching the cakes." });
    }
  },

  createCakes: async (req, res) => {
    try {
      const { name, type, price, description, imageURL } = req.body;

      // Validate required fields
      if (!name || !type || !price || !description || !imageURL) {
        return res.status(400).json({ error: "All fields are required" });
      }

      // Create the cake
      const cakes = await Cakes.create({
        name,
        type,
        price,
        description,
        imageURL,
      });

      res.status(201).send(cakes);
    } catch (error) {
      console.error("Error creating cakes:", error);
      res.status(500).send({ error: "Failed to create cakes" });
    }
  },

  deleteCakes: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Cakes.destroy({ where: { id } });
      if (!deleted) {
        return res.status(404).json({ error: "Cakes not found" });
      }
      res.status(204).end();
    } catch (error) {
      console.error("Error deleting cakes:", error);
      res.status(500).json({ error: "Failed to delete cakes" });
    }
  },
};

// module.exports = {
//   get: function (req, res) {
//     getAll((err, result) => {
//       err ? console.error(err) : res.send(result);
//     });
//   },
//   add: function (req, res) {
//     create(req.body, (err, result) => {
//       if (err) {
//         console.error(err);
//         res.status(500).json(err);
//       } else {
//         res.send(result);
//       }
//     });
//   },
//   update: function (req, res) {
//     const id = req.params.id;
//     const body = req.body;
//     console.log(id);
//     updates(body, id, (err, result) => {
//       err ? console.error(err) : res.send(result);
//     });
//   },
//   remove: function (req, res) {
//     deleted(req.params.id, (err, result) => {
//       err ? console.error(err) : res.send(result);
//     });
//   },
// };
