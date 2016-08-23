// app/controllers/administration/rbac/resourceCtrl.js
// ======================= GET =======================
module.exports.getResources = function(req, res) {
    var query = Resource.fetchAll();

    var results = query.then(function (datas) {
        res.status(200).json(datas);
    }).catch(function (error) {
        return res.status(400).json({errorMsg: 'Error while retrieving datas'});
    });
};

module.exports.getResource = function(req, res) {
    if (!req.params.resource_id){
        res.status(422).json({errorMsg: 'Missing parameter: resource_id'});
    }
    else
    {
        var resource_id = {'id': req.params.resource_id};

        var query = Resource.where(resource_id).fetchAll();
        var results = query.then(function(datas) {
            res.status(200).json(datas);
        }).catch(function (error) {
            return res.status(400).json({errorMsg: 'Error while retrieving datas'});
        });
    }
};

module.exports.getGroupsIntoResource = function(req, res) {
    if (!req.params.resource_id){
        res.status(422).json({errorMsg: 'Missing parameter: resource_id'});
    }
    else
    {
        var resource_id = {'id': req.params.resource_id};

        var query = Permission.where(resource_id).fetch({withRelated: ['group']});
        var results = query.then(function(datas) {
            res.status(200).json(datas);
        }).catch(function (error) {
            return res.status(400).json({errorMsg: 'Error while retrieving datas'});
        });
    }
};

// ======================= POST =======================
module.exports.postResource = function(req, res) {
    if (!req.body.login){
        res.status(422).json('Missing parameter: login');
    }
    else if (!req.body.password) {
        res.status(422).json('Missing parameter: password');
    }
    else
    {
        var datas = req.body;

        var query = Resource.forge(datas).save();
        var results = query.then(function(datas) {
            res.status(200).json(datas);
        }).catch(function (error) {
            return res.status(400).json({errorMsg: 'Error while writing', datas: datas});
        });
    }
};

// ======================= PUT =======================
module.exports.putResource = function(req, res) {
    return res.status(200).json('updateResource');
};

// ======================= DELETE =======================
module.exports.deleteResource = function (req, res) {
    if (!req.params.resource_id){
        res.status(422).json('Missing parameter: resource_id');
    }
    else
    {
    var query = Permission.forge({id: req.params.resource_id})
        .fetch({require: true})
        .then(function (datas) {
            datas.destroy()
        });

    var results= query.then(function (destroy) {
        res.status(200).json({successMsg: 'Resource deleted'});
    }).catch(function (error) {
        res.status(500).json({errorMsg: 'Error while deleting data'});
    });
}
};
