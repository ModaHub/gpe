// server.js

// modules =================================================
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var requireDir      = require('require-dir');
var objectFlatten   = require('./app/utils/objectFlatten');
var routes          = requireDir('./app/routes', {recurse: true});
var db              = require('./app/models');

// configuration ===========================================
var env    = process.env.NODE_ENV || 'testing';
var config = require('./config/' + env);

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
db.sequelize.sync().then(function() {
    var server = app.listen((config.port), function() {
        console.log(config.hostname + ': Magic happens on ' + config.ip + ":" + config.port);
    });
});
