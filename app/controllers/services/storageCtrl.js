// app/controllers/services/storage/storageCtrl.js
var orm_utils  = require('../../utils/ormUtils.js');
var arrayUtils = require('../../utils/inArray');

// ======================= GET =======================
module.exports.getAllStorages = function(req, res) {
    var Storages = req.app.get('models').storages;

    Storages.fetchAll().then(function (storages) {
        return res.status(200).json(storages);
    }).catch(function (error) {
        return res.status(400).json(error);
    });
}
module.exports.getStorages = function(req, res) {
    var Storages = req.app.get('models').storages;

    orm_utils.getQuery(
        res,
        Storages,
        { cloud_vendor: req.cloud_provider }
    );
}

module.exports.getStorage = function(req, res) {
    var Storages = req.app.get('models').storages;

    orm_utils.getQuery(
        res,
        Storages,
        {
            cloud_vendor: req.cloud_provider,
            id: req.storage.id
        }
    );
}

module.exports.getContainers = function (req, res) {
    var Containers = req.app.get('models').storage_containers;

    orm_utils.getQuery(
        res,
        Containers,
        { cloud_vendor: req.cloud_provider }
    );
};

module.exports.getContainer = function (req, res) {
    var Containers = req.app.get('models').storage_containers;

    orm_utils.getQuery(
        res,
        Containers,
        {
            cloud_vendor: req.cloud_provider,
            id: req.container.id
        }
    );
};

module.exports.getObjects = function (req, res) {
    var Objects = req.app.get('models').storage_objects;

    orm_utils.getQuery(
        res,
        Objects,
        { cloud_vendor: req.cloud_provider }
    );
}
module.exports.getObject = function (req, res) {
    var Objects = req.app.get('models').storage_objects;

    orm_utils.getQuery(
        res,
        Objects,
        {
            cloud_vendor: req.cloud_provider,
            id: req.object.id
        }
    );
}

// ======================= POST =======================
module.exports.postStorage = function(req, res) {
    var Storages = req.app.get('models')[req.cloud_provider + '_storage'];

    if (typeof req.body.name !== 'string' || isNaN(Number(req.body.account_id))) {
        return res.status(400).json('Bad request');
    }

    var datas = {
        name:        req.body.name,
        description: req.body.description || '',
    };

    switch (req.cloud_provider) {
        case 'azr':
            datas['azr_storage_account_id'] = req.body.account_id;
            break;
        case 'aws':
            datas['aws_cloud_account_id'] = req.body.account_id;
            break;
        default:
            return res.status(400).json('Cloud provider not handled');
    }

    Storages.forge(datas)
    .save()
    .then(function (save) {
        return res.status(200).json(save);
    }).catch(function (error) {
        return res.status(400).json({errorMsg: 'Error while writing', datas: datas});
    });
}

module.exports.postContainer = function (req, res) {
    if (req.cloud_provider !== 'aws') {
        return res.status(200).json('Not handled');
    }

    if (typeof req.body.name !== 'string') {
        return res.status(400).json('Bad name');
    }

    if (typeof req.body.region !== 'string') {
        return res.status(400).json('Bad region');
    }

    if (isNaN(Number(req.body.size))) {
        return res.status(400).json('Size is not a number');
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

    var Containers = req.app.get('models')[req.cloud_provider + '_storage_containers'];
    var datas = req.body;

    datas.creation_date   = date;
    datas.storage_class   = datas.storage_class.toUpperCase();
    datas.expect          = datas.expect != false;
    datas.request_payment = datas.request_payment != false;
    datas.versionning     = datas.versionning != false;
    datas.storage_id      = req.storage.id;

    Containers.forge(datas).save().then(function (save) {
        return res.status(200).json(save);
    }).catch(function (error) {
        console.log(error);
        return res.status(400).json({errorMsg:'Error while writing', datas: datas});
    });
};

module.exports.postObject = function (req, res) {
    if (req.cloud_provider !== 'aws') {
        return res.status(200).json('Not handled');
    }

    if (typeof req.body.name !== 'string') {
        return res.status(400).json('Bad name');
    }

    if (typeof req.body.storage_class === 'undefined') {
        return res.status(400).json('No storage class');
    }

    var storage_class = ["STANDARD", "STANDARD_IA", "REDUCED_REDUNDANCY"];

    if (false === arrayUtils.inArray(req.body.storage_class.toUpperCase(), storage_class)) {
        return res.status(400).json('Storace class ' + req.body.storage_class + ' not handled');
    }

    if (typeof req.body.type !== 'string') {
        return res.status(400).json('Bad type');
    }

    if (isNaN(Number(req.body.size))) {
        return res.status(400).json('Size is not a number');
    }

    if (typeof req.body.md5hash !== 'string') {
        return res.status(400).json('Bad md5hash');
    }

    if (isNaN(Number(req.body.object_level))) {
        return res.status(400).json('Object_level is not a number');
    }

    if (isNaN(Number(req.body.object_lb))) {
        return res.status(400).json('Object_lb is not a number');
    }

    if (isNaN(Number(req.body.object_ub))) {
        return res.status(400).json('Object_ub is not a number');
    }

    var Objects = req.app.get('models')[req.cloud_provider + '_storage_objects'];
    var datas = req.body;

    datas.container_id  = req.container.id;
    datas.storage_class = datas.storage_class.toUpperCase();

    Objects.forge(datas).save().then(function (save) {
        return res.status(200).json(save);
    }).catch(function (error) {
        console.log(error);
        return res.status(400).json({errorMsg:'Error while writing', datas: datas});
    })
};


// ======================= PUT =======================
module.exports.putStorage = function(req, res) {
    var storage = req.storage;

    storage.save(req.body).then(function (save) {
        return res.status(200).json(save);
    }).catch(function (error) {
        return res.status(400).json({ errorMsg: 'Error while updating storage', datas: req.body });
    })
}

module.exports.putContainer = function (req, res) {
    var container = req.container;

    container.save(req.body).then(function (save) {
        return res.status(200).json(save);
    }).catch(function (error) {
        return res.status(400).json({ errorMsg: 'Error while updating container', datas: req.body });
    });
};

module.exports.putObject = function (req, res) {
    var object = req.object;

    object.save(req.body).then(function (save) {
        return res.status(200).json(save);
    }).catch(function (error) {
        return res.status(400).json({ errorMsg: 'Error while updating object', datas: req.body });
    })
};


// ======================= DELETE =======================
module.exports.deleteContainer = function (req, res) {
    var container = req.container;

    container.destroy().then(function (result) {
        return res.status(200).json("Deleted");
    }).catch(function (error) {
        return res.status(400).json({ errorMsg:'Error while deleting container', datas: container })
    });
};

module.exports.deleteObject = function (req, res) {
    var object = req.object;

    object.destroy().then(function (result) {
        return res.status(200).json("Deleted");
    }).catch(function (error) {
        return res.status(400).json({ errorMsg: 'Error while deleting object', datas: object });
    });
};
