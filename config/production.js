// config/development.js
var os = require('os');

module.exports = {
    hostname: os.hostname(),
    ip: 'localhost',
    db_url: "postgresql://root:etna42@37.59.60.163:5432/development",
    db : {
    	client: 'pg',
	    connection: {
		    port: "5432",
	    	host: "37.59.60.163",
		    user: "root",
		    password: "etna42",
		    database: "development"
	 	}
	}
}
