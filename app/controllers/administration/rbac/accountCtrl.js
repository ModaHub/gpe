// app/controllers/administration/rbac/accountCtrl.js
var bcrypt     = require('bcrypt');
var orm        = require('../../../models/rbac');
var Account    = orm._models.accounts;
var User       = orm._models.users;

// ======================= GET =======================
module.exports.getAccounts = function(req, res) {
    if (!req.params.cloud_provider){
    	var query = Account.fetchAll();
    }
    else
    {
    	var query = Account.where({'cloud_vendor': req.params.cloud_provider}).fetchAll();
    }
    var results = query.then(function (datas) {
        res.status(200).json(datas);
    }).catch(function (error) {
        return res.status(400).json({errorMsg: 'Error while retrieving datas'});
    });
}

module.exports.getAccount = function(req, res) {
    if (!req.params.account_id){
        res.status(422).json({errorMsg: 'Missing parameter: account_id'});
    }
    else if (!req.params.cloud_provider)
    {
        res.status(422).json({errorMsg: 'Missing parameter: cloud_provider'});
    }
    else
    {
        var params = {'id': req.params.account_id, 'cloud_vendor': req.params.cloud_provider};

        var query = Account.where(params).fetchAll();
        var results = query.then(function(datas) {
            res.status(200).json(datas);
        }).catch(function (error) {
            return res.status(400).json({errorMsg: 'Error while retrieving datas'});
        });
    }
}

module.exports.getUsersIntoAccount = function(req, res) {
    if (!req.params.account_id){
        res.status(422).json({errorMsg: 'Missing parameter: account_id'});
    }
    else
    {
	var model = req.params.cloud_provider + '_accounts';
        var params = {'id': req.params.account_id};

        var query = orm._models[model].where(params).fetch({withRelated: ['user']});
        var results = query.then(function(datas) {
            res.status(200).json(datas);
        }).catch(function (error) {
            return res.status(400).json({errorMsg: 'Error while retrieving datas'});
        });
    }
}

// ======================= POST =======================
module.exports.postAccount = function(req, res) {
    if (!req.body.login){
        res.status(422).json('Missing parameter: login');
    }
    else if (!req.body.password)
    {
        res.status(422).json('Missing parameter: password');
    }
    else
    {
	var model = req.params.cloud_provider + '_accounts';
        var params = req.body;

        var query = orm._models[model].forge(params).save();
        var results = query.then(function(save) {
            res.status(200).json(save);
        }).catch(function (error) {
            return res.status(400).json({errorMsg: 'Error while writing data'});
        });
    }
}

// ======================= PUT =======================
module.exports.putAccount = function(req, res) {
    return res.status(200).json('updateAccount');
};

// ======================= DELETE =======================
module.exports.deleteAccount = function (req, res) { 
    var model = req.params.cloud_provider + '_accounts';
    var params = {'id': req.params.account_id};

    var query = orm._models[model].forge(params)
        .fetch({require: true})
        .then(function (datas) {
            datas.destroy()
        });

    var results= query.then(function (destroy) {
        res.status(200).json({successMsg: 'Account deleted'});
    }).catch(function (error) {
        res.status(500).json({errorMsg: 'Error while deleting data', datas: datas});
    });
};
