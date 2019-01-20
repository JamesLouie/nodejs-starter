var mongoClient = require('mongodb').MongoClient;

var state = {
    db: null
};

exports.connect = function(connectionString, databaseName, onComplete){
    if (state.db) return onComplete();

    mongoClient.connect(connectionString, function(err, connectedClient) {
        if (err) return onComplete(err);
        state.db = connectedClient.db(databaseName);
        onComplete();
    });
};

exports.close = function (onComplete) {
    if (state.db) {
        state.db.close(function(err, result) {
            state.db = null;
            onComplete(err);
        })
    }
};

exports.get = function() { 
    return state.db;
}