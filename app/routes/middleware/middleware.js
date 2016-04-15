var db      = require('../../models');
var inArray = require('../../utils/inArray');

module.exports = function (app) {
    app.param('cloud_provider', function (req, res, next, provider) {
        if (false === inArray.inArray(provider, ['aws', 'azr'])) {
            return res.status(400).json("Bad request");
        }
        req.cloud_provider = provider;
        next();
    });
    app.param('container_id', function (req, res, next, container_id) {
        var table   = req.cloud_provider + '_storage_containers';
        var query   = db[table].findById(container_id);
        var results = query.then(function (container) {
            if (container === null) {
                return res.status(404).json("Not found");
            } else {
                req.container = container;
                next();
            }
        });
    });
    app.param('object_id', function (req, res, next, object_id) {
        var table   = req.cloud_provider + '_storage_objects';
        var query   = db[table].findById(object_id);
        var results = query.then(function (object) {
            if (object === null) {
                return res.status(404).json("Not found");
            } else {
                req.storage_object = object;
                next();
            }
        });
    });
};
