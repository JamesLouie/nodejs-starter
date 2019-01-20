var customerRouter = require('express').Router();

customerRouter.get('/', function(req,res,next) {
    res.send("Hello from customer router")
});

module.exports = customerRouter;