let mongoose = require('mongoose')
let quoteSchema= new mongoose.Schema({
    quote: String,
    name: String,
})
module.exports= mongoose.model('Quote',quoteSchema)