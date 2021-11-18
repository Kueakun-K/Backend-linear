const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    dataName: String,
    dataGameEUC: String,
    dataGameCOV: String,
})

const DataModel = mongoose.model('Data', DataSchema)

module.exports = DataModel