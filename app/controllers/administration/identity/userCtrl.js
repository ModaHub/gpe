// app/controllers/administration/identity/userCtrl.js
var pg = require('pg');
var db = require('../../../../config/db');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    var results = [];
    app.get('/users', function(req, res) {
	pg.connect(db.url, function (err, client, done) {
	    if (err) {
		  console.err(err);
		  return res.status(500).json('Database connection failed bitch !');
	    }

	    var query = client.query("SELECT * FROM users");
	    query.on('row', function (row) {
		results.push(row);
	    });

	    query.on('end', function () {
		return res.status(200).json(results);
	    });
	});
    });
};
