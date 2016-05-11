// app/controllers/services/storage/StorageCtrl.js
var storage = require("../../../models/storage");

// ======================= GET =======================
module.exports.getStorages = function(req, res) {
    storage.where({'cloud_vendor': req.cloud_provider})
        .fetch()
        .then(function(result){
            return res.status(200).json(result);
        })
        .catch(function(error) {
            return res.status(400).json(error);
        });
}

module.exports.getStorage = function(req, res) {
    storage.where({'id': req.storage_id})
    .fetch()
    .then(function(result){
        if (null === result)
            return res.status(404).json("Storage not found");
        else
            return res.status(200).json(result);
    })
    .catch(function(error) {
        return res.status(400).json(error);
    });
}

module.exports.getContainers = function (req, res) {
    return res.status(200).json("getContainers");
};

module.exports.getContainer = function (req, res) {
    return res.status(200).json("getContainer");
};

module.exports.getObjectFromContainer = function (req, res) {
    return res.status(200).json("getObjectFromContainer");
};

module.exports.getObjects = function (req, res) {
    return res.status(200).json("getObjects");
}

// ======================= POST =======================
module.exports.postStorage = function(req, res) {
    return res.status(200).json("postStorage");
}

module.exports.updateContainer = function (req, res) {
    return res.status(200).json('updateContainer');
};

module.exports.updateObject = function (req, res) {
    return res.status(200).json('updateObject');
};


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
