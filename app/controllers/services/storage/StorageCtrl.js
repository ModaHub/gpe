// app/controllers/services/storage/StorageCtrl.js
var storage = require("../../../models/storage");

function getQuery(module, datas) {
    module.where(datas)
        .fetchAll()
        .then(function(result){
            if (null === result)
                return res.status(200).json([]);
            else
                return res.status(200).json(result);
        })
        .catch(function(error) {
            return res.status(400).json(error);
        });
}

// ======================= GET =======================
module.exports.getStorages = function(req, res) {
    getQuery(storage[''], {'cloud_vendor': req.cloud_provider});
}

module.exports.getStorage = function(req, res) {
    getQuery(storage, {'cloud_vendor': req.cloud_provider, 'id': req.params.storage_id});
}

module.exports.getContainers = function (req, res) {
    getQuery(storage_container, {'cloud_vendor': req.cloud_provider});
};

module.exports.getContainer = function (req, res) {
    getQuery(storage_container, {'cloud_vendor': req.cloud_provider, 'id': req.params.storage_id});
};

module.exports.getObjects = function (req, res) {
    getQuery(storage_container, {'cloud_vendor': req.cloud_provider});
}

// module.exports.getObject = function (req, res) {
//     return res.status(200).json("getObjects");
// }

// module.exports.getObjectFromContainer = function (req, res) {
//     return res.status(200).json("getObjectFromContainer");
// };

// ======================= POST =======================
module.exports.postStorage = function(req, res) {
    aws_storage.add([]);

    return res.status(200).json("postStorage");
}

// module.exports.updateContainer = function (req, res) {
//     return res.status(200).json('updateContainer');
// };

// module.exports.updateObject = function (req, res) {
//     return res.status(200).json('updateObject');
// };


// ======================= PUT =======================
module.exports.putStorage = function(req, res) {
    return res.status(200).json("putStorage");
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
