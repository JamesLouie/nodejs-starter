const mongodb = require('../data/mongodb');
var bodyParser = require('body-parser');

module.exports = (app) => {

  // Setup Mongo
  mongodb.connect(process.env.MONGO_CONNECTION_STRING, process.env.MONGO_DATABASE_NAME, function(err) {
    if (err) {
      console.log(`Unable to start server due to issue connecting with mongodb: ${err}`);
      process.exit(1);
    }
  });

  // Setup Middleware
  app.use(bodyParser.json());

  // Routes
  app.get("/", function(req,res) {
      res.send("hello world");
  })
}