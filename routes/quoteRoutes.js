 const jsonfile = require("jsonfile");
 const express = require("express");
 let Quote = require('../models/model')
 const bodyParser = require("body-parser");
 const router = express.Router();

 module.exports = app => {
 app.get('/quotes', function (req, res) {
   res.render("index");
 });

 app.post("/quotes/new", (req, res) => {
   
   let newQuote = new Quote({
     quote: req.body.quote,
     name: req.body.name,
     book: req.body.book
   });

   newQuote.save(function (err) {
     if (err) return handleError(err);
     console.log('Quote successfully saved!');
     res.sendStatus(200);
   });
 });
 app.get("/quotes/read", (req, res) => {
  // get the Quote by name
  Quote.find({name: req.body.name, }, function(err, Quote) {
      if (err) throw err;
      // we have the object Quote returned to us
      console.log(Quote);
      res.send(Quote);
  });
});

app.get("/quotes", (req, res) => {
  // get all the Quotes
  Quote.find({}, function(err, Quotes) {
      if (err) throw err;
      // object of all the Quotes
      // console.log(Quotes);
      res.send(Quotes);
  });
});
};
//  jsonfile.readFile("./DB/quotes.json", function (err, content) {

//    content.push({
//      quote: quote,
//      name: name,
//      book: book
//    });

//    console.log("added " + quote + " to DB");
//    console.log("added " + name + " to DB");
//    console.log("added " + book + " to DB");

//    jsonfile.writeFile("./DB/quotes.json", content, function (err) {
//      console.log(err);
//    });

//    res.sendStatus(200);
//  });
//  }

