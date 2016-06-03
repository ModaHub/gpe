// app/controllers/administration/rbac/accountCtrl.js
var orm        = require("../../../models/rbac");
var orm_utils  = require('../../../utils/ormUtils.js');
var arrayUtils = require('../../../utils/inArray');
var Account    = orm._models.accounts;

// ======================= GET =======================
module.exports.getAccounts = function(req, res) {
    orm_utils.getQuery(
        res,
        Account
    );
}

module.exports.getAccount = function(req, res) {
    orm_utils.getQuery(
        res,
        Account,
        {
            'id': req.params.id
        }
    );
}

// ======================= PUT =======================
module.exports.putAccount = function(req, res) {
    var account = req.account;

    account.save(req.body).then(function (save) {
        return res.status(200).json(save);
    }).catch(function (error) {
        return res.status(400).json({errorMsg: "Error while updating", datas: req.body});
    })
}

// ======================= POST =======================
module.exports.postAccount = function(req, res) {
    var model   = 'accounts';

    var datas = {
        name:        req.body.name,
        description: req.body.description || '',
    };
};

// ======================= DELETE =======================
module.exports.deleteAccount = function (req, res) {
    return res.status(200).json('deleteAccount');
};
