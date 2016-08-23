// app/controllers/administration/rbac/permissionCtrl.js
// ======================= GET =======================
module.exports.getPermissions = function(req, res) {
    orm_utils.getQuery(
        res,
        Permission
    );
}

module.exports.getPermission = function(req, res) {
    orm_utils.getQuery(
        res,
        Permission,
        {
            'id': req.params.id
        }
    );
}

// ======================= PUT =======================
module.exports.putPermission = function(req, res) {
    var permission = req.permission;

    permission.save(req.body).then(function (save) {
        return res.status(200).json(save);
    }).catch(function (error) {
        return res.status(400).json({errorMsg: "Error while updating", datas: req.body});
    })
}

// ======================= POST =======================
module.exports.postPermission = function(req, res) {
    var model   = 'permission';

    var datas = {
        name:        req.body.name,
        description: req.body.description || '',
    };
};

// ======================= DELETE =======================
module.exports.deletePermission = function (req, res) {
    return res.status(200).json('deletePermission');
};
