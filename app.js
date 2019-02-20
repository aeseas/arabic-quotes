const express = require("express");
const bodyParser  = require("body-parser");
const app = express();
const mongoose = require("mongoose")

let cors = require("cors")
app.use(cors())

app.use(bodyParser.json());
require("./routes/quoteRoutes") (app);

const PORT    = 5000;

app.listen(PORT, () => {
    console.log(`Server running`);
  });

  mongoose.connect(
    "mongodb+srv://root:root@cluster0-p8rby.mongodb.net/quoteDB", {useNewUrlParser:true} 
);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected')
});


