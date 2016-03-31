// config/config.js
var os = require('os');

module.exports = {
    hostname: os.hostname(),
    ip: (os.networkInterfaces()).eno1[0].address,
    port: "8080"
}
