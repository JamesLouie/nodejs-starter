// Provider for getting application configurations

var fs = require('fs');
var appSettings = JSON.parse(fs.readFileSync(__dirname + '/../../configuration/appsettings.json', 'utf-8'));

module.exports = appSettings;