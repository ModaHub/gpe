// app/routes/administration/rbac/group.js
var Group = require ('../../../controllers/administration/rbac/groupCtrl.js');

module.exports = function (app) {
    app.get('/groups/', Group.getGroups);
    app.get('/groups/:group_id', Group.getGroup);
    app.get('/groups/:group_id/users/', Group.getGroupUsers);
//    app.get('/groups/:group_id/resources/', Group.getGroupResources);

    app.post('/groups', Group.postGroup);
//    app.post('/groups/:group_id/users', Group.postUserInGroup);
//    app.post('/groups/:group_id/resources', Group.postResourceInGroup);

    app.put('/groups/:group_id', Group.putGroup);
//    app.put('/groups/:group_id/users/:user_id', Group.putUserInGroup);
//    app.put('/groups/:group_id/resources/:resource_id', Group.putResourceInGroup);

    app.delete('/groups/:group_id', Group.deleteGroup);
//    app.delete('/groups/:group_id/users/:user_id', Group.deleteUserInGroup);
//    app.delete('/groups/:group_id/resources/:resource_id', Group.deleteResourceInGroup);
};
