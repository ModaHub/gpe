// app/controllers/administration/rbac/groupCtrl.js
var orm        = require('../../../models/rbac');
var Group      = orm._models.groups;
var User       = orm._models.users;

// ======================= GET =======================
module.exports.getGroups = function(req, res) {
    var query = Group.fetchAll();

    var results = query.then(function (datas) {
        res.status(200).json(datas);
    }).catch(function (error) {
        return res.status(400).json({errorMsg: 'Error while retrieving datas'});
    });
};

module.exports.getGroup = function(req, res) {
        var params = {'id': req.params.group_id};

        var query = Group.where(params).fetchAll();
        var results = query.then(function(datas) {
            res.status(200).json(datas);
        }).catch(function (error) {
            return res.status(400).json({errorMsg: 'Error while retrieving datas'});
        });
};

module.exports.getGroupUsers = function(req, res) {
        var params = {'group_id': req.params.group_id};

        var query = User.forge(params).fetch({withRelated: ['groups']});

        var results = query.then(function(datas) {
            res.status(200).json(datas);
        }).catch(function (error) {
            return res.status(400).json({errorMsg: 'Error while retrieving datas'});
        });
};

// ======================= POST =======================
module.exports.postGroup = function(req, res) {
    if (!req.body.name){
        res.status(422).json('Missing parameter: name');
    }
    else
    {
        var params = req.body;

        var query = Group.forge(params).save();
        var results = query.then(function(save) {
            res.status(200).json(save);
        }).catch(function (error) {
            return res.status(400).json({errorMsg: 'Error while writing', datas: datas});
        });
    }
};

// ======================= PUT =======================
module.exports.putGroup = function(req, res) {
    var params = req.body;
    var query = Group.forge(params).save();
    var results = query.then(function(save) {
        res.status(200).json(save);
    }).catch(function (error) {
        return res.status(400).json({errorMsg: 'Error while writing', datas: datas});
    });
};

// ======================= DELETE =======================
module.exports.deleteGroup = function (req, res) { 
    var query = Group.forge({'id': req.params.group_id})
        .fetch({require: true})
        .then(function (datas) {
            datas.destroy()
        });

    var results= query.then(function (destroy) {
        res.status(200).json({successMsg: 'Group deleted'});
    }).catch(function (error) {
        res.status(400).json({errorMsg: 'Error while deleting data'});
    });
};
