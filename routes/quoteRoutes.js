const express = require("express");
const Quote = require('../models/models')
const router = express.Router();
const app = express();

module.exports = app => {
    router.get("./quotes", (req, res, next) => {
        quote.find()
            .exec()
            .then(docs => {
                console.log(docs);
                res.status(200).json(docs);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    });

    router.post("./quotes/new", (req, res, next) => {
        const quotes = new Quote({
            quote: req.body.quote,
            name: req.body.name,
            book: req.body.book
        })
        quotes.save().then(result => {
                console.log(result)
            })
            .catch(err => console.log(err))
        res.status(201).json({
            message: "Handling POST requests",
            createdQuote: quotes
        })
        jsonfile.readFile("./DB/quotes.json", function (err, content) {

            content.push({
                quote: quote,
                name: name,
                book: book
            });

            console.log("added " + quote + " to DB");
            console.log("added " + name + " to DB");
            console.log("added " + book + " to DB");

            jsonfile.writeFile("./DB/quotes.json", content, function (err) {
                console.log(err);
            });

            res.sendStatus(200);
        });
    });
}