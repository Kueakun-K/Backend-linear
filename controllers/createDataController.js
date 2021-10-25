const { createDataService } = require("../services");

module.exports = async function createDataController(req, res) {
  await createDataService(req.body);
  return res.send(200);
};