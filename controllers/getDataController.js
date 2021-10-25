const { getDataService } = require('../services')

module.exports = async function getDataController(req, res){
    const result = await getDataService(req.query.isFinished)
    return res.send(result)
}