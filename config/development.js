// config/development.js
var os = require('os');

module.exports = {
    hostname: os.hostname(),
    ip: 'localhost',
    port: "8080",
    db_url: "postgresql://root:etna42@37.59.60.163:5432/ttk"
}
