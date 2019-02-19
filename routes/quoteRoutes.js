const express = require("express");
const Quote = require('../models/models')
const router = express.Router();
const app = express();

module.exports = app => {
    //GET
    router.get("/", (req, res, next) => {
        res.status(200).json({
            message: "Handeling Get request to /quotes"
        });

        Quote.find()
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

    //POST
    router.post("./quotes/new", (req, res, next) => {
        //Y
        const quote = new Quote({
            quote: req.body.quote,
            name: req.body.name,
            book: req.body.book
        });
        quote.save().then(result => {
            console.log(result)
        })
        .catch(err =>console.log(err))
        res.status(201).json({
            message: "Handeling POST request to /quotes",
            createdQuote: quote
        })


        
        //C
        // const quotes = new Quote({
        //     quote: req.body.quote,
        //     name: req.body.name,
        //     book: req.body.book
        // })
        // quotes.save().then(result => {
        //         console.log(result)
        //     })
        //     .catch(err => console.log(err))
        // res.status(201).json({
        //     message: "Handling POST requests",
        //     createdQuote: quotes
        // // })
        // jsonfile.readFile("./DB/quotes.json", function (err, content) {

        //     content.push({
        //         quote: quote,
        //         name: name,
        //         book: book
        //     });

            console.log("added " + quote + " to DB");
            console.log("added " + name + " to DB");
            console.log("added " + book + " to DB");

            // jsonfile.writeFile("./DB/quotes.json", content, function (err) {
            //     console.log(err);
            // });

            res.sendStatus(200);
        });
    });
}