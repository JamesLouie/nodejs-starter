var customerRouter = require('express').Router();
var db = require('./../data/db');

customerRouter.get('/', function(req,res,next) {
    var collection = db.get().collection("Customer");
    collection.find({}).toArray(function(err, results) {
        res.send(results);
    })
});

module.exports = customerRouter;