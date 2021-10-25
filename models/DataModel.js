const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    dataName: String,
    dataGame: String,
    // time: String,
})

const DataModel = mongoose.model('Data', DataSchema)

module.exports = DataModel