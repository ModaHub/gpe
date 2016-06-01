// app/controllers/administration/rbac/userCtrl.js
var orm        = require("../../models/users");
var orm_utils  = require('../../utils/ormUtils.js');
var arrayUtils = require('../../utils/inArray');
var User    = orm._models.user;

// ======================= GET =======================
module.exports.getUsers = function(req, res) {
    orm_utils.getQuery(
        res,
        User
    );
}

module.exports.getUser = function(req, res) {
    orm_utils.getQuery(
        res,
        User,
        {
            'id': req.params.id
        }
    );
}

// ======================= PUT =======================
module.exports.putUser = function(req, res) {
    var user = req.user;

    user.save(req.body).then(function (save) {
        return res.status(200).json(save);
    }).catch(function (error) {
        return res.status(400).json({errorMsg: "Error while updating", datas: req.body});
    })
}

// ======================= POST =======================
module.exports.postUser = function(req, res) {
    var model   = 'user';

    var datas = {
        name:        req.body.name,
        description: req.body.description || '',
    };
};

// ======================= DELETE =======================
module.exports.deleteUser = function (req, res) {
    return res.status(200).json('deleteUser');
};
