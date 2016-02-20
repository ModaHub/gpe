// app/controllers/administration/identity/userCtrl.js
var pg = require('pg');
var db = require('../../../../config/db');

module.exports.getUsers = function (req, res) {
    var results = [];
    pg.connect(db.url, function (err, client, done) {
        if (err) {
         console.error(err);
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
};
