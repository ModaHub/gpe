// server.js

// modules =================================================
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var requireDir      = require('require-dir');
var routes          = requireDir('./app/routes', {recurse: true});
var objectFlatten   = require('./app/utils/objectFlatten');

// configuration ===========================================
if (!process.env.APPLICATION_ENV) {
    process.env.APPLICATION_ENV = 'development';
}
var db             = require('./config/' + process.env.APPLICATION_ENV);
process.env.db_url = db.url;

var port = process.env.npm_package_config_port || 8080;

// expose app
exports = module.exports = app;

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// routes ==================================================
routes = objectFlatten(routes);
for (var route in routes) {
    require('./app/routes/' + route)(app);
}

// start app ===============================================
app.listen(port);

// shoutout
console.log('Magic happens on port ' + port);
