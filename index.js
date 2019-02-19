const mongoose = require("mongoose")
const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.json());
require("./routes/quoteRoutes") (app);

const PORT = 5000;

app.listen(PORT, () => {
console.log('Server running');
});
mongoose.connect("mongodb+srv://root:root@cluster0-wtg7o.mongodb.net/quoteDB",{useNewUrlParser:true} );
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log('connected')
});