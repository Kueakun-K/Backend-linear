const {DataModel} = require('../models')

module.exports = async function createDataService(data){
    const Data = new DataModel(data)
    return Data.save()

}