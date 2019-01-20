// Provider for getting application configurations

var fs = require('fs');
var _ = require('underscore');
var appSettings = JSON.parse(fs.readFileSync(__dirname + '/../../configuration/appsettings.json', 'utf-8'));

if (process.env.CURRENT_ENV) {
    try {
        var envAppSettings = JSON.parse(fs.readFileSync(__dirname + `/../../configuration/appsettings.${process.env.CURRENT_ENV}.json`, 'utf-8'));
        _.extend(appSettings, envAppSettings);
    }
    catch(exception) {
        console.log(`[ERROR] Unable to read settings file for ${process.env.CURRENT_ENV} with exception: ${exception}`);
    }
}

module.exports = appSettings;