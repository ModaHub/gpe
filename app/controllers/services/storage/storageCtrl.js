// app/controllers/services/storage/storageCtrl.js
var arrayUtils = require('../../../utils/inArray');

// ======================= GET =======================
module.exports.getAllStorages = function(req, res) {
    var QRB = req.app.get('QRB');

    QRB('storages').select()
    .then(function (datas) {
        res.status(200).json(datas);
    })
    .catch(function(error) {
        res.status(400).json(error);
    });
}

module.exports.getStorages = function(req, res) {
    var QRB = req.app.get('QRB');

    QRB('storages').where('cloud_vendor', req.cloud_provider)
    .select()
    .then(function (datas) {
        res.status(200).json(datas);
    })
    .catch(function(error) {
        res.status(400).json(error);
    });
}

module.exports.getStorage = function(req, res) {
    var storage = req.storage

    return res.status(200).json(storage);
}

module.exports.getContainers = function (req, res) {
    var QRB = req.app.get('QRB');

    QRB('storage_containers').where({
        cloud_vendor: req.cloud_provider,
        storage_id: req.storage.id
    })
    .select()
    .then(function (datas) {
        res.status(200).json(datas);
    })
    .catch(function(error) {
        res.status(400).json(error);
    });
}

module.exports.getContainer = function (req, res) {
    var container = req.container;

    return res.status(200).json(container);
}

module.exports.getObjects = function (req, res) {
    var QRB = req.app.get('QRB');

    QRB('storage_objects').where({
        cloud_vendor: req.cloud_provider,
        container_id: req.container.id
    }).select()
    .then(function (datas) {
        res.status(200).json(datas);
    })
    .catch(function(error) {
        res.status(400).json(error);
    });
}

module.exports.getObject = function (req, res) {
    var object = req.object;

    res.status(200).json(object);
}

// ======================= POST =======================
module.exports.postStorage = function(req, res) {
    var QRB   = req.app.get('QRB');
    var table = req.cloud_provider + '_storages';

    if (typeof req.body.name !== 'string' || isNaN(Number(req.body.account_id))) {
        return res.status(400).json('Bad request');
    }

    var datas = {
        name:           req.body.name,
        description:    req.body.description || '',
        aws_account_id: req.body.account_id
    };

    QRB.returning('*')
    .insert(datas)
    .into(table)
    .then(function (storage) {
        return res.status(201).json(storage);
    })
    .catch(function(error) {
        return res.status(400).json({
            msg:   "Error when writing datas",
            error: error
        });
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

    var date = new Date();
    if (date.toUTCString() === 'Invalid Date') {
        return res.status(400).json('Bad creation_date')
    }

    if (typeof req.body.expect === 'undefined' &&
        typeof req.body.request_payment === 'undefined' &&
        typeof req.body.versionning === 'undefined') {
        return res.status(400).json('Missing fields');
    }

    var QRB   = req.app.get('QRB');
    var table = req.cloud_provider + '_storage_containers';
    var datas = {
        name:            req.body.name,
        description:     req.body.description || '',
        creation_date:   date,
        acl:             req.body.acl,
        storage_class:   req.body.storage_class.toUpperCase(),
        region:          req.body.region,
        size:            req.body.size,
        expect:          req.body.expect != false,
        request_payment: req.body.request_payment != false,
        versionning:     req.body.versionning != false,
        storage_id:      req.storage.id
    }

    QRB.returning('*')
    .insert(datas)
    .into(table)
    .then(function (container) {
        return res.status(201).json(container);
    })
    .catch(function(error) {
        return res.status(400).json({
            msg:   "Error when writing datas",
            error: error
        });
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

    var QRB   = req.app.get('QRB');
    var table = req.cloud_provider + '_storage_objects';
    var datas = req.body;

    datas.container_id  = req.container.id;
    datas.storage_class = datas.storage_class.toUpperCase();

    QRB.returning('*')
    .insert(datas)
    .into(table)
    .then(function (object) {
        return res.status(201).json(object);
    })
    .catch(function(error) {
        return res.status(400).json({
            msg:   "Error when writing datas",
            error: error
        });
    });
};


// ======================= PUT =======================
module.exports.putStorage = function(req, res) {
    var QRB   = req.app.get('QRB');
    var table = req.cloud_provider + '_storages';

    QRB(table).returning('*')
    .where('id', req.storage.id)
    .update(req.body)
    .then(function (storage) {
        return res.status(201).json(storage);
    })
    .catch(function (error) {
        return res.status(400).json({
            msg:   "Error when writing datas",
            error: error
        });
    })
}

module.exports.putContainer = function (req, res) {
    var QRB   = req.app.get('QRB');
    var table = req.cloud_provider + '_storage_containers';

    QRB(table).returning('*')
    .where('id', req.container.id)
    .update(req.body)
    .then(function (container) {
        return res.status(201).json(container);
    })
    .catch(function (error) {
        return res.status(400).json({
            msg:   "Error when writing datas",
            error: error
        });
    })
};

module.exports.putObject = function (req, res) {
    var QRB   = req.app.get('QRB');
    var table = req.cloud_provider + '_storage_objects';

    QRB(table).returning('*')
    .where('id', req.object.id)
    .update(req.body)
    .then(function (object) {
        return res.status(201).json(object);
    })
    .catch(function (error) {
        return res.status(400).json({
            msg:   "Error when writing datas",
            error: error
        });
    })
};


// ======================= DELETE =======================
module.exports.deleteContainer = function (req, res) {
    var QRB   = req.app.get('QRB');
    var table = req.cloud_provider + '_storage_containers';

    QRB(table)
    .where('id', req.container.id)
    .del()
    .then(function (container) {
        return res.status(201).json(container + ' rows affected');
    })
    .catch(function (error) {
        return res.status(400).json({
            msg:   "Error when writing datas",
            error: error
        });
    })
};

module.exports.deleteObject = function (req, res) {
    var QRB   = req.app.get('QRB');
    var table = req.cloud_provider + '_storage_objects';

    QRB(table)
    .where('id', req.object.id)
    .del()
    .then(function (object) {
        return res.status(201).json(object + ' row affected');
    })
    .catch(function (error) {
        return res.status(400).json({
            msg:   "Error when writing datas",
            error: error
        });
    })
};
