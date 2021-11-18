const express = require("express");
const router = express.Router();
const controllers = require("./controllers");

router.get("/Datas", (req, res) => controllers.getDataController(req, res));

router.post("/Data", (req, res) => controllers.createDataController(req, res));

module.exports = router