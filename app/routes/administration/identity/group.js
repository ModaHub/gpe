// app/routes/administration/identity/group.js
var user = require ('../../../controllers/administration/identity/groupCtrl.js')

module.exports = function (app) {
    app.get('/administration/groups', user.getGroups);
};
