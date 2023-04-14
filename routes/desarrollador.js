const express = require("express");
const router = express.Router();
const Desarrollador = require("../controllers/desarrollador.js")

router.get("/", Desarrollador.getAllDesarrollador);
router.get("/nombre", Desarrollador.getDesarrolladorNombre);

module.exports = router;