// app/controllers/services/storage/getStorageCtrl.js
var pg = require('pg')
var models = require ('../../../models')

module.exports.getAllStorageContainers = function (req, res) {
    var query = models.sequelize.query("SELECT * FROM storage_containers", { type: models.sequelize.QueryTypes.SELECT});
    var results = query.then(function (value) {
	res.status(200).send(value);
    })
};

module.exports.getAllStorageObjects = function (req, res) {
    var query = models.sequelize.query("SELECT * FROM storage_objects", { type: models.sequelize.QueryTypes.SELECT});
    var results = query.then(function (value) {
	res.status(200).send(value);
    })
};

module.exports.getAWSStorageContainers = function (req, res) {
    if (!req.params.id)
    {
	var query = models.aws_storage_containers.findAll({});
    } else {
	var query = models.aws_storage_containers.findAll({
	    where: { 'id': req.params.id}
	});
    }
    var results = query.then(function (value) {
	res.status(200).send(value);
    })
};

module.exports.getAZRStorageContainers = function (req, res) {
    if (!req.params.id)
    {
	var query = models.azr_storage_containers.findAll({});
    } else {
	var query = models.azr_storage_containers.findAll({
	    where: { 'id': req.params.id}
	});
    }
    var results = query.then(function (value) {
	res.status(200).send(value);
    })
};


module.exports.getAWSStorageObjects = function (req, res) {
    if (!req.params.id)
    {
	var query = models.aws_storage_objects.findAll({});
    } else {
	var query = models.aws_storage_objects.findAll({
	    where: { 'id': req.params.id}
	});
    }
    var results = query.then(function (value) {
	res.status(200).send(value);
    })
};

module.exports.getAZRStorageObjects = function (req, res) {
    if (!req.params.id)
    {
	var query = models.azr_storage_objects.findAll({});
    } else {
	var query = models.azr_storage_objects.findAll({
	    where: { 'id': req.params.id}
	});
    }
    var results = query.then(function (value) {
	res.status(200).send(value);
    })
};
