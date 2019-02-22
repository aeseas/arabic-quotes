// const express = require('express');
// const router = express.Router();
const mongoose = require('mongoose');
const Quote = require('../models/model')


module.exports = app => {

    app.get('/', (req, res) => {
        res.render('index');
    })

    app.get('/quotes', (req, res) => {
        console.log("fetching all quotes");

        mongoose.model('Quote').find((err, quotes) => {
            res.send(quotes);
        })
    })

    //POST
    app.post('/quotes/create', (req, res) => {
        console.log("posting a new quote");
        const quote = new Quote({
            quotear: req.body.quotear,
            quoteen: req.body.quoteen,
            name: req.body.name
        });

        quote.save().then(result => {
                console.log(result);
            })
            .catch(err => console.log(err));
        res.sendStatus(200);
    })

    // * DELETE 
    app.delete("/quotes/:quoteId", (req, res) => {
        console.log("deleting a quote");
        console.log(req.body);
        let id = req.params.quoteId;

        Quote.findOneAndDelete({
            _id: id
        }, (err) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            console.log("quote deleted");
            res.sendStatus(200);
        })
    })

    //GET ID
    app.get('/quote/:quoteId', (req, res) => {
        console.log("fetching a quote");
        console.log(req.body);
        let id = req.params.quoteId;

        Quote.find({
            _id: id
        }).then(result => {
            console.log(result);
            res.send(result);
        })
    })

    //UPDATE
    app.put('/quotes/:quoteId', (req, res) => {
        console.log("updating a quote");
        let id = req.params.quoteId;

        Quote.findOneAndUpdate({
            _id: id
        }, {
            quotear: req.body.quotear,
            quoteen: req.body.quoteen,
            name: req.body.name
        }, err => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            console.log("quote updated");
            res.sendStatus(200);
        })
    })
};


// const express = require("express");
// let Quote = require('../models/model')

// module.exports = app => {

//     //index
//     app.get('/', (req, res) => {
//         res.render('index')
//     })

//     //van arno
//     app.get('/quotes', function(req, res, next) {
//         Quote.find({}).then(function(quotes) {
//             res.send(quotes)
//         })
//     })

//     //GET BY ID
//     app.get('/quotes/:id', function (req, res) {
//         Quote.find((err, quotes) => {
//             if (err) {
//                 res.send(err)
//             }
//             res.json(quotes)
//         })
//     });

//     //POST
//     app.post("/quotes/create", (req, res) => {

//         let newQuote = new Quote({
//             quotear: req.body.quotear,
//             quoteen: req.body.quoteen,
//             name: req.body.name
//         });

//         newQuote.save(function (err) {
//             let quoteAr = req.body.quotear;
//             let quoteEn = req.body.quoteen;
//             let name = req.body.name;
//             if (err) return handleError(err);

//             console.log("")
//             console.log('Quote successfully saved!');
//             console.log("Arab quote: " + quoteAr +
//                 "\nEnglish translation: " + quoteEn +
//                 "\nBy: " + name);

//             res.sendStatus(200);
//         });
//     });

//     //GET BY ID
//     app.get("/quotes/read", (req, res) => {
//         // get the Quote by id
//         Quote.find({
//             _id: req.query.id
//         }, function (err, Quote) {
//             if (err) throw err;
//             //console.log(Quote);
//             res.send(Quote);
//         });
//     });

//     //GET BY NAME
//     // app.get("/quotes/:name", (req, res) => {
//     //     // get the Quote by name
//     //     Quote.find({
//     //         name : req.params.name
//     //     }, function (err, Quote) {
//     //         if (err) throw err;

//     //         //console.log(Quote);
//     //         res.send(Quote);
//     //     });
//     // });

//     //PUT
//     app.put("/quotes/update/:quoteId", (req, res) => {
//         // find the Quote by id
//         Quote.findOneAndUpdate({
//             _id: req.params.quoteId
//         }, {
//             quoteAr: req.body.quotear,
//             quoteEn: req.body.quoteen,
//             name: req.body.name,
//         }, function (err, Quote) {
//             if (err) throw err;

//             console.log(Quote, 'Quote successfully updated!');

//             res.sendStatus(200);
//         });
//     })

//     //DELETE
//     app.delete("/quotes/:quoteId", (req, res) => {
//         Quote.findByIdAndDelete({
//             _id: req.params.quoteId
//         }, function (err) {
//             if (err) throw err;

//             console.log("")
//             console.log("Quote succesfully deleted!");

//             res.sendStatus(200);
//         })
//     })

//     // DELETE
//     // app.delete("/quotes/destroy/:quoteId", (req, res) => {
//     //     let id = req.params.quoteId;

//     //     Quote.findByIdAndDelete({
//     //         _id: id
//     //     }, (err) =>{
//     //         if (err) {
//     //             return res.sendStatus(500);
//     //         }
//     //         res.sendStatus(200)
//     //     })
//     // })
// };

