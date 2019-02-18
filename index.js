const express = require("express");
const bodyParser  = require("body-parser");

const app     = express();

require("./routes/quoteRoutes") (app);

const PORT    = 5000;

app.listen(PORT, () => {
  console.log(`Server running`);
});
