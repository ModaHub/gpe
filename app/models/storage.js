// storage.js
'use strict';

var orm 	 	   = require('./orm.js');
var requireDir     = require('require-dir');
var storage_models = requireDir("./storages");

module.exports = orm;
