// const express = require("express");
// const route = express.Router();
// const { get, add, update, remove } = require("../controllers/index");

// route.get("/getAll", get);
// route.post("/add", add);
// route.put("/update/:id", update);
// route.delete("/delete/:id", remove);

// module.exports = route;

const express = require("express");
const router = express.Router();
const {
  getAllCakes,
  getCakesById,
  createCakes,
  deleteCakes,
} = require("../controllers/cakes.js");

router.post("/add", createCakes);
router.get("/getAll", getAllCakes);
router.get("/pastry/:id", getCakesById);
router.delete("/delete/:id", deleteCakes);

module.exports = router;
