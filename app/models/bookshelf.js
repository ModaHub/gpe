var env    = process.env.NODE_ENV || 'development';
var config = require('../../config/' + env);

// Database configuration ==================================
var knex  = require('knex')(config.db);
bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

module.exports = bookshelf;
