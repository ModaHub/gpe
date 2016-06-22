#!/usr/bin/env node

var os = require('os');
var fs = require('fs');

var myData = {}
//Hostname
myData["hostname"] = os.hostname()


//Interfaces
var NIC = os.networkInterfaces();
myData["interfaces"] = {}
for (var i in NIC) {
	var NIC_address =  NIC[i];
	myData["interfaces"][i] = [];
	for (var y in NIC_address){
		myData["interfaces"][i].push(NIC_address[y].address );
};
};

// Gateway
var network = require('network');
network.get_gateway_ip(function(err, ip) {
	if (err) {
		console.log(err);
	} else {
		myData.gateway = ip;
		// Resolver
		myData["resolver"] = []
		var file_data = fs.readFileSync('/etc/resolv.conf') + ' '
		var array = file_data.split("\n");

		for (var i in array) {
			if (array[i][0] != "#" && array[i][0] != " ") {
		// 		process.stdout.write(array[i]);
				myData["resolver"].push(array[i])
			} 
		};

		// CECI A ETE REALISER PAR TTK IL A DIT CEST PAS BEAU MAIS CA MARCHE
		console.log(myData)

		var outputFilename = '/tmp/conf.json';

		fs.writeFile(outputFilename, JSON.stringify(myData, null, 4), function(err) {
		    if(err) {
		      console.log(err);
		    } else {
		      console.log("JSON saved to " + outputFilename);
		    }
		}); 
	}
});
