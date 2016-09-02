var arrayUtils = require('../../utils/inArray');

module.exports = function (app) {
    app.param('cloud_vendor', function (req, res, next, vendor) {
        if (false === arrayUtils.inArray(vendor, ['aws', 'azr'])) {
            return res.status(400).json('Cloud vendor not handled');
        }
        req.cloud_vendor = vendor;
        next();
    });
    app.param('storage_id', function (req, res, next, storage_id) {
        var QRB   = req.app.get('QRB');

        QRB('storages').where({
            cloud_vendor: req.cloud_vendor,
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
            cloud_vendor: req.cloud_vendor,
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
            cloud_vendor: req.cloud_vendor,
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
