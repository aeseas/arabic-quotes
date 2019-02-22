const express = require("express");
const bodyParser  = require("body-parser");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();

let cors = require("cors")
app.use(cors())

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use(bodyParser.json());
require("./routes/quoteRoutes") (app);

const uri = process.env.MONGODB_URI || "mongodb+srv://root:root@cluster0-p8rby.mongodb.net/quoteDB"
mongoose.connect(
  uri, {useNewUrlParser:true}
  // "mongodb+srv://root:root@cluster0-p8rby.mongodb.net/quoteDB", {useNewUrlParser:true} 
);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected')
});

const PORT    = process.env.PORT||5000;

app.listen(PORT, () => {
    console.log(`Server running`);
  });


