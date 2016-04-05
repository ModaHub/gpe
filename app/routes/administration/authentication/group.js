// app/routes/administration/authentication/group.js
var user = require ('../../../controllers/administration/authentication/groupCtrl.js')

module.exports = function (app) {
    app.get('/administration/groups', user.getGroups);
};
