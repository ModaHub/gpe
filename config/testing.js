// config/testing.js
module.exports = {
    ip: 'localhost',
    db_url: "postgresql://root:etna42@37.59.60.163:5432/testing",
    db : {
    	client: 'pg',
    	debug: true,
	    connection: {
		    port: "5432",
	    	host: "37.59.60.163",
		    user: "root",
		    password: "etna42",
		    database: "testing"
	 	}
	}
}
