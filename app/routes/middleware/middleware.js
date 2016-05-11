// var db      = require('../../models');
var inArray = require('../../utils/inArray');

module.exports = function (app) {
    app.param('cloud_provider', function (req, res, next, provider) {
        if (false === inArray.inArray(provider, ['aws', 'azr'])) {
            return res.status(400).json("Bad request");
        }
        req.cloud_provider = provider;
        next();
    });
    app.param('storage_id', function (req, res, next, storage_id) {
    	if (+storage_id === parseInt(storage_id)) {
    		req.storage_id = storage_id;
    		next();
    	}
       	else
    		return res.status(400).json("Bad request");
    });
};
