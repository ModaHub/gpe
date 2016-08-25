// config/cloudhook.js
module.exports = {
    ip: 'localhost',
    db_url: "postgresql://root:etna42@localhost:5432/cloudhook",
    db : {
    	client: 'pg',
	    connection: {
		    port: "5432",
	    	host: "localhost",
		    user: "root",
		    password: "cloudhook",
		    database: "cloudhook"
	 	}
	}
}
