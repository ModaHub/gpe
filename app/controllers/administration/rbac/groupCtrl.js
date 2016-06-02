// app/controllers/administration/rbac/groupCtrl.js
var orm        = require("../../../models/rbac");
var orm_utils  = require('../../../utils/ormUtils.js');
var arrayUtils = require('../../../utils/inArray');
var Group      = orm._models.groups;

// ======================= GET =======================
module.exports.getGroups = function(req, res) {
    orm_utils.getQuery(
        res,
        Group
    );
}

module.exports.getGroup = function(req, res) {
    orm_utils.getQuery(
        res,
        Group,
        {
            'id': req.params.id
        }
    );
}

// ======================= PUT =======================
module.exports.putGroup = function(req, res) {
    var group = req.group;

    group.save(req.body).then(function (save) {
        return res.status(200).json(save);
    }).catch(function (error) {
        return res.status(400).json({errorMsg: "Error while updating", datas: req.body});
    })
}

// ======================= POST =======================
module.exports.postGroup = function(req, res) {
    var model   = 'groups';

    var datas = {
        name:        req.body.name,
        description: req.body.description || '',
    };
};

// ======================= DELETE =======================
module.exports.deleteGroup = function (req, res) {
    return res.status(200).json('deleteGroup');
};
