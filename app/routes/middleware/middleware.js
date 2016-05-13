var inArray = require('../../utils/inArray');

module.exports = function (app) {
    app.param('cloud_provider', function (req, res, next, provider) {
        if (false === inArray.inArray(provider, ['aws', 'azr'])) {
            return res.status(400).json("Bad request");
        }
        req.cloud_provider = provider;
        next();
    });
};
