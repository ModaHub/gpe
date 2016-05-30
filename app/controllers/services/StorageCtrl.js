// app/controllers/services/storage/StorageCtrl.js
var orm        = require("../../models/storage");
var orm_utils  = require('../../utils/ormUtils.js');
var arrayUtils = require('../../utils/inArray');
var Storage    = orm._models.storage;

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
        Storage,
        {
            'cloud_vendor': req.cloud_provider,
            'id': req.params.id
        }
    );
}

module.exports.getContainers = function (req, res) {
    orm_utils.getQuery(
        res,
        orm._models.storage_containers,
        {'cloud_vendor': req.cloud_provider}
    );
};

module.exports.getContainer = function (req, res) {
    orm_utils.getQuery(
        res,
        orm._models.storage_containers,
        {
            'cloud_vendor': req.cloud_provider,
            'id': req.params.id
        }
    );
};

module.exports.getObjects = function (req, res) {
    orm_utils.getQuery(
        res,
        orm._models.storage_containers,
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
    var model    = req.cloud_provider + '_storage';

    if (typeof req.body.name !== 'string' || isNaN(Number(req.body.owner_account_id))) {
        return res.status(400).json('Bad request');
    }

    var datas = {
        name:        req.body.name,
        description: req.body.description || '',
    };

    switch (req.cloud_provider) {
        case 'azr':
            datas['azr_storage_account_id'] = req.body.owner_account_id;
            break;
        case 'aws':
            datas['aws_cloud_account_id'] = req.body.owner_account_id;
            break;
        default:
            return res.status(400).json('Cloud provider not handled');
    }

    orm._models[model].forge(datas)
    .save()
    .then(function (save) {
        return res.status(200).json(save);
    }).catch(function (error) {
        return res.status(400).json({errorMsg: 'Error while writing', datas: datas});
    });
}

module.exports.postContainer = function (req, res) {
    if (typeof req.body.name !== 'string') {
        return res.status(400).json('Bad name');
    }

    if (typeof req.body.region !== 'string') {
        return res.status(400).json('Bad region');
    }

    if (isNaN(Number(req.body.size))) {
        return res.status(400).json('size is not a number');
    }

    if (isNaN(Number(req.body.storage_id))) {
        return res.status(400).json('No storage_id');
    }

    if (typeof req.body.creation_date === 'undefined') {
        return res.status(400).json('No creation_date');
    }

    date = new Date(req.body.creation_date);
    if (date.toUTCString() === 'Invalid Date') {
        return res.status(400).json('Bad creation_date')
    }

    if (typeof req.body.acl === 'undefined') {
        return res.status(400).json('No acl');
    }

    var acl_type = [
        "private",
        "public-read",
        "public-read-write",
        "authenticated-read",
        "aws-exec-read",
        "bucket-owner-read",
        "bucker-owner-full-control"
    ];

    if (false === arrayUtils.inArray(req.body.acl, acl_type)) {
        return res.status(400).json('Acl ' + req.body.acl + ' not handled');
    }

    if (typeof req.body.storage_class === 'undefined') {
        return res.status(400).json('No storage class');
    }

    var storage_class = ["STANDARD", "STANDARD_IA", "REDUCED_REDUNDANCY"];

    if (false === arrayUtils.inArray(req.body.storage_class.toUpperCase(), storage_class)) {
        return res.status(400).json('Storace class ' + req.body.storage_class + ' not handled');
    }

    if (typeof req.body.expect === 'undefined' &&
        typeof req.body.request_payment === 'undefined' &&
        typeof req.body.versionning === 'undefined') {
        return res.status(400).json('Missing fields');
    }

    var model = req.cloud_provider + '_storage_containers';
    var datas = req.body;

    datas.creation_date   = date;
    datas.storage_class   = datas.storage_class.toUpperCase();
    datas.expect          = datas.expect != false;
    datas.request_payment = datas.request_payment != false;
    datas.versionning     = datas.versionning != false;

    orm._models[model].forge(datas).save().then(function (save) {
        return res.status(200).json(save);
    }).catch(function (error) {
        console.log(error);
        return res.status(400).json({errorMsg:'Error while writing', datas: datas});
    });
};

// module.exports.updateObject = function (req, res) {
//     return res.status(200).json('updateObject');
// };


// ======================= PUT =======================
module.exports.putStorage = function(req, res) {
    var storage = req.storage;

    storage.save(req.body).then(function (save) {
        return res.status(200).json(save);
    }).catch(function (error) {
        return res.status(400).json({errorMsg: "Error while updating", datas: req.body});
    })
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
