// app/controllers/services/storage/StorageCtrl.js
var orm       = require("../../models/storage");
var orm_utils = require('../../utils/ormUtils.js');

// ======================= GET =======================
module.exports.getStorages = function(req, res) {
    orm_utils.getQuery(
        res,
        orm._models.storage,
        {'cloud_vendor': req.cloud_provider}
    );
}

module.exports.getStorage = function(req, res) {
    orm_utils.getQuery(
        res,
        orm._models.storage,
        {
            'cloud_vendor': req.cloud_provider,
            'id': req.params.id
        }
    );
}

module.exports.getContainers = function (req, res) {
    orm_utils.getQuery(
        res,
        orm._models.storage_container,
        {'cloud_vendor': req.cloud_provider}
    );
};

module.exports.getContainer = function (req, res) {
    orm_utils.getQuery(
        res,
        orm._models.storage_container,
        {
            'cloud_vendor': req.cloud_provider,
            'id': req.params.id
        }
    );
};

module.exports.getObjects = function (req, res) {
    orm_utils.getQuery(
        res,
        orm._models.storage_container,
        {'cloud_vendor': req.cloud_provider}
    );
}

// module.exports.getObject = function (req, res) {
//     return res.status(200).json("getObjects");
// }

// module.exports.getObjectFromContainer = function (req, res) {
//     return res.status(200).json("getObjectFromContainer");
// };

// ======================= POST =======================
module.exports.postStorage = function(req, res) {
    var model         = req.cloud_provider + '_storage';
    var cloud_account = model + '_account_id';

    var datas = {
        'name':         'storage3',
        'description':  'hello'
    };
    datas[cloud_account] = 1;
    orm._models[model].forge(datas)
    .save()
    .then(function (model){
        return res.status(200).json("postStorage");
    })
    .catch(function (error) {
        return res.status(400).json(error);
    });
}

// module.exports.updateContainer = function (req, res) {
//     return res.status(200).json('updateContainer');
// };

// module.exports.updateObject = function (req, res) {
//     return res.status(200).json('updateObject');
// };


// ======================= PUT =======================
module.exports.putStorage = function(req, res) {
    console.log(req.storage);
    return res.status(200).json(req.storage);
}

module.exports.putContainer = function (req, res) {
    return res.status(200).json('putContainer');
};

module.exports.putObject = function (req, res) {
    return res.status(200).json('putObject');
};


// ======================= DELETE =======================
module.exports.deleteContainer = function (req, res) {
    return res.status(200).json('deleteContainer');
};

module.exports.deleteObject = function (req, res) {
    return res.status(200).json('deleteObject');
};
