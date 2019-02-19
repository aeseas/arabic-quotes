const express = require("express");
let Quote = require('../models/model')

module.exports = app => {

    //GET
    app.get('/quotes', function (req, res) {
        Quote.find((err, quotes) => {
            if (err) {
                res.send(err)
            }
            res.json(quotes)
        })
    });

    //POST
    app.post("/quotes/new", (req, res) => {

        let newQuote = new Quote({
            quote: req.body.quote,
            name: req.body.name
        });

        newQuote.save(function (err) {
            let quote = req.body.quote
            let name = req.body.name
            if (err) return handleError(err);

            console.log("")
            console.log('Quote successfully saved!');
            console.log("quote: " + quote +
                "\nby: " + name);

            res.sendStatus(200);
        });
    });

    //GET
    app.get("/quotes/read", (req, res) => {
        // get the Quote by id
        Quote.find({
            _id: req.query.id
        }, function (err, Quote) {
            if (err) throw err;
            //console.log(Quote);
            res.send(Quote);
        });
    });

    //PUT
    app.put("/quotes/update/:quoteId", (req, res) => {
        // find the Quote by id
        Quote.findOneAndUpdate({
            _id: req.params.quoteId
        }, {
            quote: req.body.quote,
            name: req.body.name,
        }, function (err, Quote) {
            if (err) throw err;

            console.log(Quote, 'Quote successfully updated!');

            res.sendStatus(200);
        });
    })

    //DELETE
    app.delete("/quotes/:quoteId", (req, res) => {
        Quote.findByIdAndDelete({
            _id: req.params.quoteId
        }, function (err) {
            if (err) throw err;

            console.log("")
            console.log("Quote succesfully deleted!");

            res.sendStatus(200);
        })
    })
};