// app/controllers/administration/rbac/resourceCtrl.js
var orm        = require("../../../models/rbac");
var orm_utils  = require('../../../utils/ormUtils.js');
var arrayUtils = require('../../../utils/inArray');
var Resource    = orm._models.resources;

// ======================= GET =======================
module.exports.getResources = function(req, res) {
    orm_utils.getQuery(
        res,
        Resource
    );
}

module.exports.getResource = function(req, res) {
    orm_utils.getQuery(
        res,
        Resource,
        {
            'id': req.params.id
        }
    );
}

// ======================= PUT =======================
module.exports.putResource = function(req, res) {
    var resource = req.resource;

    resource.save(req.body).then(function (save) {
        return res.status(200).json(save);
    }).catch(function (error) {
        return res.status(400).json({errorMsg: "Error while updating", datas: req.body});
    })
}

// ======================= POST =======================
module.exports.postResource = function(req, res) {
    var model   = 'resource';

    var datas = {
        name:        req.body.name,
        description: req.body.description || '',
    };
};

// ======================= DELETE =======================
module.exports.deleteResource = function (req, res) {
    return res.status(200).json('deleteResource');
};
