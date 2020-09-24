require('./config/environment.config')();
var app = require('./app');

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
    console.log(`Node.js API server is listening on http://localhost:${port}`);
});