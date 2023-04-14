const express = require("express");
const router = express.Router();

router.use("/desarrollador", require("./desarrollador.js"));

module.exports = router;
