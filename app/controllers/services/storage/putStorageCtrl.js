// app/controllers/services/storage/putStorageCtrl.js
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
	}
    );
    var results = query.then(function (container) {
	res.status(200).send(container);
    })
};

module.exports.putAZRStorageContainers = function (req, res) {
    var query = models.azr_storage_containers.create(
	{
	    "name": req.body.name,
	    "description": req.body.description,
	    "cache_control": req.body.cache_control,
	    "cache_disposition": req.body.cache_disposition,
	    "cache_encoding": req.body.cache_encoding,
	    "expect": req.body.expect,
	    "cors_configuration": req.body.cors_configuration,
	    "metadata": req.body.metadata
	}
    );
    var results = query.then(function (container) {
	res.status(200).send(container);
    })
};

module.exports.putAWSStorageObjects = function (req, res) {
    var query = models.aws_storage_objects.create(
	{
	    "name": req.body.name,
	    "description": req.body.description,
	    "amz_storage_class": req.body.amz_storage_class,
	    "type": req.body.type,
	    "size": req.body.size,
	    "language": req.body.language,
	    "md5hash": req.body.md5hash,
	    "metadata": req.body.metadata,
	    "amz_website_redirect_location": req.body.amz_website_redirect_location,
	    "container_id": req.body.container_id
	}
    );
    var results = query.then(function (object) {
	res.status(200).send(object);
    })
};

module.exports.putAZRStorageObjects = function (req, res) {
    var query = models.azr_storage_objects.create(
	{
	    "name": req.body.name,
	    "description": req.body.description,
	    "azr_blob_type": req.body.azr_blob_type,
	    "type": req.body.type,
	    "size": req.body.size,
	    "language": req.body.language,
	    "md5hash": req.body.md5hash,
	    "metadata": req.body.metadata,
	    "cache_disposition": req.body.cache_disposition,
	    "lease_id": req.body.lease_id,
	    "lease_duration": req.body.lease_duration,
	    "coontainer_id": req.body.container_id
	}
    );
    var results = query.then(function (object) {
	res.status(200).send(object);
    })
};
