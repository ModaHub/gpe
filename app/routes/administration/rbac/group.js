// app/routes/administration/rbac/group.js
var Group = require ('../../../controllers/administration/rbac/groupCtrl.js');

module.exports = function (app) {
    app.get('/groups/', Group.getGroups);
    app.get('/groups/:group_id([0-9]+)', Group.getGroup);
    app.get('/groups/:group_id([0-9]+)/users/', Group.getGroupUsers);
    app.get('/groups/:group_id([0-9]+)/resources/', Group.getGroupResources);

    app.post('/groups', Group.postGroup);
    app.post('/groups/:group_id([0-9]+)/users', Group.postUserInGroup);
    app.post('/groups/:group_id([0-9]+)/resources', Group.postResourceInGroup);

    app.put('/groups/:group_id([0-9]+)', Group.putGroup);
//  app.post('/groups/:group_id/users', Group.putUserInGroup); Quand les utilisateurs seront gérés via des permissions.
    app.put('/groups/:group_id([0-9]+)/resources/:permission_id([0-9]+)', Group.putResourceInGroup);

    app.delete('/groups/:group_id([0-9]+)', Group.deleteGroup);
    app.delete('/groups/:group_id([0-9]+)/users/:user_id([0-9]+)', Group.deleteUserInGroup);
    app.delete('/groups/:group_id([0-9]+)resources/:permission_id([0-9]+)', Group.deleteResourceInGroup);
};
