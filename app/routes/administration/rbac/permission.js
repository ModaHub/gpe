// app/routes/administration/rbac/permission.js
var Permission = require ('../../../controllers/administration/rbac/permissionCtrl.js');

module.exports = function (app) {
    app.get('/permissions/', Permission.getPermissions);
    app.get('/permissions/:permission_id', Permission.getPermission);
    app.get('/permissions/groups/:group_id', Permission.getPermissionByGroup);
    app.get('/permissions/resources/:resource_id', Permission.getPermissionByResource);

    app.post('/permissions/groups/:group_id/resources/:resource_id/item/:item', Permission.addPermission);

    app.put('/permissions/:permission_id/groups/:group_id', Permission.updatePermissionOnGroup);
    app.put('/permissions/:permission_id/resources/:resource_id/item/:item', Permission.updatePermissionOnResource);

    app.delete('/permissions/:permission_id', Permission.deletePermission);
    app.delete('/permissions/:permission_id/groups/:group_id', Permission.deletePermissionOnGroup);
    app.delete('/permissions/:permission_id/resources/:resource_id', Permission.deletePermissionOnResource);
};
