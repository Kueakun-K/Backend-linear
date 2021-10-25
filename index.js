const express = require('express')
const app = express()
const routes = require('./routes')
const mongoose = require("mongoose")
const cors = require("cors");

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))


mongoose.connect('mongodb+srv://linear:63010095@cluster0.hh7o2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true}).then(()=>{
    console.log('Database connected')
})

app.use('/api', routes)

app.listen(process.env.PORT || 1000,()=>{
    console.log('Started server')
})