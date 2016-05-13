// storage.js
'use strict';

var orm 	 	   = require('./orm.js');
var requireDir     = require('require-dir');
var storage_models = requireDir("./storages");


for (var model in storage_models)
	console.log(model.tableName);
