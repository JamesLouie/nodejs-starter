// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Imports
var init = require('./config/startup.config');
var db = require('./data/mongodb');

// Create App
const app = express();
init(app);

module.exports = app;