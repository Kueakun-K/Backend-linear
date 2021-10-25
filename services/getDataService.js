const {DataModel} = require('../models')

module.exports = async function getTasks(){
    const Datas = await DataModel.find()
    return Datas
}