let mongoose = require('mongoose')
let quoteSchema= new mongoose.Schema({
    quotear: String,
    quoteen: String,
    name: String,
})

module.exports= mongoose.model('Quote',quoteSchema)