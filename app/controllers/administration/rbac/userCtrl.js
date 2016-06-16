// app/controllers/administration/rbac/userCtrl.js
var bcrypt     = require('bcrypt');
var orm        = require('../../../models/rbac');
var User       = orm._models.users;
var Account    = orm._models.accounts;

// ======================= GET =======================
module.exports.getUsers = function(req, res) {
    var query = User.fetchAll();

    var results = query.then(function (datas) {
        res.status(200).json(datas);
    }).catch(function (error) {
        return res.status(400).json({errorMsg: 'Error while retrieving datas'});
    });
};

module.exports.getUser = function(req, res) {
        var params = {'id': req.params.user_id};

        var query = User.where(params).fetchAll();

        var results = query.then(function(datas) {
            res.status(200).json(datas);
        }).catch(function (error) {
            return res.status(400).json({errorMsg: 'Error while retrieving datas'});
        });
};

module.exports.getUserAccounts = function(req, res) {
        var params = {'user_id': req.params.user_id};

        var query = Account.where(params).fetchAll();

        var results = query.then(function(datas) {
            res.status(200).json(datas);
        }).catch(function (error) {
            return res.status(400).json({errorMsg: 'Error while retrieving datas'});
        });
};

// ======================= POST =======================
module.exports.postUser = function(req, res) {
    if (!req.body.login){
        res.status(422).json('Missing parameter: login');
    }
    else if (!req.body.password) {
        res.status(422).json('Missing parameter: password');
    }
    else
    {
        var params = req.body;

        var query = User.forge(params).save();
        var results = query.then(function(save) {
            res.status(200).json(save);
        }).catch(function (error) {
            return res.status(400).json({errorMsg: 'Error while writing', datas: datas});
        });
    }
};

// ======================= PUT =======================
module.exports.putUser = function(req, res) {
    var params = req.body;

    var query = User.forge({'id': req.params.user_id})
        .fetch({require: true})
        .then(function (datas) {
            datas.save(params)
        });

    var results = query.then(function(save) {
        res.status(200).json(save);
    }).catch(function (error) {
        return res.status(400).json({errorMsg: 'Error while writing', datas: datas});
    });
};

// ======================= DELETE =======================
module.exports.deleteUser = function (req, res) { 
    var query = User.forge({'id': req.params.user_id})
        .fetch({require: true})
        .then(function (datas) {
            datas.destroy()
        });

    var results= query.then(function (destroy) {
        res.status(200).json({successMsg: 'User deleted'});
    }).catch(function (error) {
        res.status(400).json({errorMsg: 'Error while deleting data'});
    });
};
