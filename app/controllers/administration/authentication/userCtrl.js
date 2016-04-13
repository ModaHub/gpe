// app/controllers/administration/authentication/userCtrl.js
var pg = require('pg');

module.exports.getUsers = function (req, res) {
    var results = [];
    pg.connect(process.env.db_url, function (err, client, done) {
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
