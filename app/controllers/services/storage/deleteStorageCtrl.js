// app/controllers/services/storage/deleteStorageCtrl.js
var db = require ('../../../models')

module.exports.AWSContainers = function (req, res) {
    var query = db.aws_storage_containers.delete({
	    where: {
		id: req.params.container_id
	    }
	}
    );
    var results = query.then(function (container) {
	res.status(200).send(container);
    })
};

module.exports.AZRContainers = function (req, res) {
    var query = db.azr_storage_containers.delete({
	    where: {
		id: req.params.container_id
	    }
	}
    );
    var results = query.then(function (container) {
	res.status(200).send(container);
    })
};

module.exports.AWSObjects = function (req, res) {
    var query = db.aws_storage_objects.delete({
	    where: {
		id: req.params.object_id
	    }
	}
    );
    var results = query.then(function (object) {
	res.status(200).send(object);
    })
};

module.exports.AZRObjects = function (req, res) {
    var query = db.azr_storage_objects.delete({
	    where: {
		id: req.params.object_id
	    }
	}
    );
    var results = query.then(function (object) {
	res.status(200).send(object);
    })
};
