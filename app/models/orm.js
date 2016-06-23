var env    = process.env.NODE_ENV || 'development';
var config = require('../../config/' + env);

// Database configuration ==================================
var knex  	   = require('knex')(config.db);
var requireDir = require('require-dir');
orm   	       = require('bookshelf')(knex);

orm.plugin('registry');

// On récupère tout les model avec les requireDir
requireDir("./storages");
requireDir("./users");

module.exports = orm;
