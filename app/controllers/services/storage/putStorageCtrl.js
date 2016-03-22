// app/controllers/services/storage/putStorageCtrl.js
var pg = require('pg')
var models = require ('../../../models')

module.exports.putAWSStorageContainers = function (req, res) {
    var query = models.aws_storage_containers.create(
	{
	    "name": req.body.name,
	    "description": req.body.description,
	    "amz_storage_class": req.body.amz_storage_class,
	    "region": req.body.region,
	    "size": req.body.size,
	    "cache_control": req.body.cache_control,
	    "cache_disposition": req.body.cache_disposition,
	    "cache_encoding": req.body.cache_encoding,
	    "expect": req.body.expect,
	    "cors_configuration": req.body.cors_configuration
	});
    var results = query.then(function (container) {
	res.status(200).send(container);
    })
};

module.exports.putAZRStorageContainers = function (req, res) {
    var query = models.azr_storage_containers.create({
	
    });
    var results = query.then(function (container) {
	res.status(200).send(container);
    })
};

module.exports.putAWSStorageObjects = function (req, res) {
    var query = models.aws_storage_objects.create({
	
    });
    var results = query.then(function (object) {
	res.status(200).send(object);
    })
};

module.exports.putAZRStorageObjects = function (req, res) {
    var query = models.azr_storage_objects.create({
	
    });
    var results = query.then(function (object) {
	res.status(200).send(object);
    })
};
