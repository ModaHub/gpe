// app/controllers/administration/rbac/userCtrl.js
var bcrypt     = require('bcrypt');
var orm        = require('../../../models/rbac');
var User       = orm._models.users;
var Account    = orm._models.accounts_view;

// ======================= GET =======================
module.exports.getUsers = function(req, res) {
    var query = User.fetchAll();

    var results = query.then(function (datas) {
        res.status(200).json(datas);
    }).catch(function (error) {
        return res.status(400).json({errorMsg: 'Error while retrieving datas'});
    });
}

module.exports.getUser = function(req, res) {
    if (!req.params.user_id){
        res.status(422).json({errorMsg: 'Missing parameter: user_id'});
    }
    else
    {
        var user_id = {'id': req.params.user_id};

        var query = User.where(user_id).fetchAll();
        var results = query.then(function(datas) {
            res.status(200).json(datas);
        }).catch(function (error) {
            return res.status(400).json({errorMsg: 'Error while retrieving datas'});
        });
    }
}

module.exports.getAccountsIntoUser = function(req, res) {
    if (!req.params.user_id){
        res.status(422).json({errorMsg: 'Missing parameter: user_id'});
    }
    else
    {
        var user_id = {'id': req.params.user_id};

        var query = Account.fetchAll();
        var results = query.then(function(datas) {
            res.status(200).json(datas);
        }).catch(function (error) {
            return res.status(400).json({errorMsg: 'Error while retrieving datas'});
        });
    }
}

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
        var datas = req.body;

        var query = User.forge(datas).save();
        var results = query.then(function(datas) {
            res.status(200).json(datas);
        }).catch(function (error) {
            return res.status(400).json({errorMsg: 'Error while writing', datas: datas});
        });
    }
}

// ======================= PUT =======================
module.exports.putUser = function(req, res) {
    return res.status(200).json('updateUser');
};

// ======================= DELETE =======================
module.exports.deleteUser = function (req, res) { 

    var query = User.forge({id: req.params.user_id})
        .fetch({require: true})
        .then(function (datas) {
            datas.destroy()
        });

    var results= query.then(function (destroy) {
        res.status(200).json({successMsg: 'User deleted'});
    }).catch(function (error) {
        res.status(500).json({errorMsg: 'Error while deleting data'});
    });
};
