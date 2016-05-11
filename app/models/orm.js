var env    = process.env.NODE_ENV || 'development';
var config = require('../../config/' + env);

// Database configuration ==================================
var knex  = require('knex')(config.db);
orm = require('bookshelf')(knex);

orm.plugin('registry');

module.exports = orm;
