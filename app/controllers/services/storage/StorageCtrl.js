<<<<<<< 19b1a721075f9990c27304f2f5eacc71f0419a22
// app/controllers/services/storage/StorageCtrl.js
var db = require('../../../models')
=======
// app/controllers/services/storage/getStorageCtrl.js
var db = require('../../../model')
>>>>>>> début du refactor Bookshelf

// ======================= GET =======================
module.exports.getContainers = function (req, res) {
    var table   = req.cloud_provider + '_storage_containers';
    var query   = db[table].findAll({});
    var results = query.then(function (data) {
        return res.status(200).json(data);
    });
};

module.exports.getContainer = function (req, res) {
    return res.status(200).json(req.container);
};

module.exports.getObjectFromContainer = function (req, res) {
    return res.status(200).json(req.storage_object);
};

module.exports.getObjects = function (req, res) {
    var table   = req.cloud_provider + '_storage_objects';
    var query   = db[table].findAll({});
    var results = query.then(function (data) {
        return res.status(200).json(data);
    });
}

// ======================= POST =======================
module.exports.updateContainer = function (req, res) {
    return res.status(200).json('updateContainer');
};

module.exports.updateObject = function (req, res) {
    return res.status(200).json('updateObject');
};


// ======================= PUT =======================
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
