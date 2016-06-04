// app/routes/administration/rbac/resource.js
var Resource = require ('../../../controllers/administration/rbac/resourceCtrl.js');

module.exports = function (app) {
    app.get('/resources/', Resource.getResources);
    app.get('/resources/:resource_id', Resource.getResource);
    app.get('/resources/:resource_id/groups', Resource.getGroupsIntoResource);

//    app.post('/resources', Resource.addResource);

//    app.put('/resources/:resource_id', Resource.updateResource);

//    app.delete('/resources/:resource_id', Resource.deleteResource);
};
