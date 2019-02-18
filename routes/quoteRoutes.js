 const jsonfile = require("jsonfile");
 module.exports = app => {
app.get("/quotes", (req, res) => {
    console.log("fetching all users");
   
    // jsonfile reading
    jsonfile.readFile("./DB/quotes.json", function(err, content) {
      // send file contents back to sender
      res.send(content);
    });
  });}