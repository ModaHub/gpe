var inArray   = require('../../utils/inArray');
var orm       = require("../../models/storage");

module.exports = function (app) {
    app.param('cloud_provider', function (req, res, next, provider) {
        if (false === inArray.inArray(provider, ['aws', 'azr'])) {
            return res.status(400).json("Bad request");
        }
        req.cloud_provider = provider;
        next();
    });
    app.param('storage_id', function (req, res, next, id) {
        var model = req.cloud_provider + '_storage';
        orm._models[model].where({id: id})
        .fetch()
        .then(function (result) {
            req.storage = result;
            next();
        })
        .catch(function (error) {
            next(error);
        });
    });
};
