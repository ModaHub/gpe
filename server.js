// server.js

// modules =================================================
var express        	= require('express');
var app            	= express();
var bodyParser     	= require('body-parser');
var methodOverride 	= require('method-override');
var requireDir     	= require('require-dir');
var objectFlatten  	= require('./app/utils/objectFlatten');
var routes         	= requireDir('./app/routes', {recurse: true});
var AWS            	= require('aws-sdk');

var env    		   	= process.env.NODE_ENV || 'development';
var config 		   	= require('./config/' + env);

var orm            	= require("./app/models/orm");


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

// AWS SDK =================================================
app.set('awsTools', AWS);

// Knex query builder ======================================

var knex = require('knex')(config.db);
app.set("QRB", knex);

// MODELS ==================================================
var models = orm._models;
app.set('models', models);

// routes ==================================================
routes = objectFlatten(routes);
for (var route in routes) {
    require('./app/routes/' + route)(app);
}

// start app ===============================================
var server = app.listen((8080), function() {
    console.log('Magic happens on localhost:8080');
});
