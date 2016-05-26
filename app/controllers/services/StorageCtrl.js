// app/controllers/services/storage/StorageCtrl.js
var orm       = require("../../models/storage");
var orm_utils = require('../../utils/ormUtils.js');
var Storage   = orm._models.storage;

// ======================= GET =======================
module.exports.getStorages = function(req, res) {
    orm_utils.getQuery(
        res,
        Storage,
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

    if (typeof req.body.name !== 'string' || typeof Number(req.body.cloud_account_id) !== 'number') {
        return res.status(400).json("Bad request");
    }

    var datas = {
        name:        req.body.name,
        description: req.body.description || '',
    };

    datas[req.cloud_provider + '_cloud_account_id'] = req.body.cloud_account_id;
    orm._models[model].forge(datas)
    .save()
    .then(function (save){
        return res.status(200).json(save);
    })
    .catch(function (error) {
        return res.status(400).json({errorMsg: "Error while writing", datas: datas});
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
