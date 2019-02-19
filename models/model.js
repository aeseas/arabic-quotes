let mongoose = require('mongoose')
let quoteSchema= new mongoose.Schema({
    quote: String,
    name: String,
    book: String
})
module.exports= mongoose.model('Quote',quoteSchema)