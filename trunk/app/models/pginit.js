var pg = require('pg');
var db = require('../config/db');

var client = new pg.Client(db.connect);

client.connect();

var query = client.query('CREATE TABLE (id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
	query.on('end', function() {
		client.end();
	});
