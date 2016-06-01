// app/routes/administration/rbac/group.js
var Group = require ('../../../controllers/administration/rbac/groupCtrl.js');

module.exports = function (app) {
    app.get('/groups/', Group.getGroups);
    app.get('/groups/:group_id', Group.getGroup);

    app.post('/groups', Group.addGroup);
    app.post('/groups/:group_id/:user_id', Group.addUserInGroup);
    app.post('/groups/:group_id/:resource_id', Group.addResourceInGroup);

    app.put('/groups/:id', Group.updateGroup);

    app.delete('/groups/:group_id', Group.deleteGroup);
    app.delete('/groups/:group_id/:user_id', Group.deleteUserInGroup);
    app.delete('/groups/:group_id/:resource_id', Group.deleteResourceInGroup);
};
