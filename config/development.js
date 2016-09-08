// config/development.js
module.exports = {
    ip: 'localhost',
    db_url: "postgresql://root:etna42@37.59.60.163:5432/development",
    db : {
    	client: 'pg',
    	debug: false,
	    connection: {
		    port: "5432",
	    	host: "127.0.0.1",
		    user: "Hassan",
		    password: "",
		    database: "development"
	 	}
	}
}
