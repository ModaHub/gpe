var arrayUtils = require('../../utils/inArray');

module.exports = function (app) {
    app.param('cloud_provider', function (req, res, next, provider) {
        if (false === arrayUtils.inArray(provider, ['aws', 'azr'])) {
            return res.status(400).json("Bad request");
        }
        req.cloud_provider = provider;
        next();
    });
    app.param('container_id', function (req, res, next, container_id) {
        var model = req.cloud_provider + '_storage_containers';

        req.app.get('models')[model].where({id: container_id})
        .fetch()
        .then(function (container) {
            req.container = container;
            next();
        }).catch(function (error) {
            next(error);
        });
    });
    app.param('storage_id', function (req, res, next, storage_id) {
        var model = req.cloud_provider + '_storages';

        req.app.get('models')[model].where({id: storage_id})
        .fetch()
        .then(function (storage) {
            req.storage = storage;
            next();
        }).catch(function (error) {
            next(error);
        });
    });
    app.param('object_id', function (req, res, next, object_id) {
        var model = req.cloud_provider + '_storage_objects';

        req.app.get('models')[model].where({id: object_id})
        .fetch()
        .then(function (object) {
            req.object = object;
            next();
        }).catch(function (error) {
            next(error);
        });
    });
};
