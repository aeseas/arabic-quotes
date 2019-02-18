// import the NPM dependancy package
const express     = require("express");
const bodyParser  = require("body-parser");

// initialise express() inside of your app variable
const app = express();

// parse body of incoming json requests
app.use(bodyParser.json());

// import route modules and pass your app
require("./routes/quoteRoutes")(app);
require("./routes/quoteRoutes")(app);

// choose what port on which to run the server
const PORT = 5000;

// use the app variable and listen on the port
app.listen(PORT, () => {
  console.log(`Server running`);
});
