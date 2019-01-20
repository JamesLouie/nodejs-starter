// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Imports
var customerRouter = require('./routing/customerRouter');
var appSettings = require('./utils/configurationProvider');
var db = require('./data/db');

// Create App
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.get("/", function(req,res) {
    res.send(appSettings.message);
})
app.use('/customer', customerRouter);

// Initialize DB - should probably move this part to server.js
db.connect(appSettings.mongoConnectionString, appSettings.mongoDatabaseName, function(err) {
    if (err) {
        console.log(`Unable to connect to mongo with error: ${err}`)
        process.exit(1);
    }
});

module.exports = app;