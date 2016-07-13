var arrayUtils = require('../../utils/inArray');
var orm        = require("../../models/storage");

module.exports = function (app) {
    app.param('cloud_provider', function (req, res, next, provider) {
        if (false === arrayUtils.inArray(provider, ['aws', 'azr'])) {
            return res.status(400).json("Bad request");
        }
        req.cloud_provider = provider;
        next();
    });
    app.param('storage_id', function (req, res, next, storage_id) {
        var QRB   = req.app.get('QRB');

        QRB('storages').where({
            cloud_vendor: req.cloud_provider,
            id: storage_id
        })
        .select()
        .first()
        .then(function (storage) {
            if (storage) {
                req.storage = storage;
            } else {
                return res.status(404).json('Storage not Found');
            }
            next();
        })
        .catch(function(error) {
            return res.status(400).json(error);
        });
    });
    app.param('container_id', function (req, res, next, container_id) {
        var QRB   = req.app.get('QRB');

        QRB('storage_containers').where({
            cloud_vendor: req.cloud_provider,
            storage_id: req.storage.id,
            id: container_id
        })
        .select()
        .first()
        .then(function (container) {
            if (container) {
                req.container = container;
            } else {
                return res.status(404).json('Container not Found');
            }
            next();
        })
        .catch(function(error) {
            next(error);
        });
    });
    app.param('object_id', function (req, res, next, object_id) {
        var QRB   = req.app.get('QRB');

        QRB('storage_objects').where({
            cloud_vendor: req.cloud_provider,
            container_id: req.container.id,
            id: object_id
        })
        .select()
        .first()
        .then(function (object) {
            if (object) {
                req.object = object;
            } else {
                return res.status(404).json('Object not Found');
            }
            next();
        })
        .catch(function(error) {
            next(error);
        });
    });
};
