var express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get("/", function(req,res) {
    res.send("Hello World");
})

module.exports = app;