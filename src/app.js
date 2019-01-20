var express = require('express');
var bodyParser = require('body-parser');
var customerRouter = require('./routing/customerRouter');

var appSettings = require('./utils/configurationProvider');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.get("/", function(req,res) {
    res.send(appSettings.message);
})

app.use('/customer', customerRouter);

module.exports = app;