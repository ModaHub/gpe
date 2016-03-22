// app/routes/administration/identity/user.js
var user = require ('../../../controllers/administration/identity/userCtrl.js')

module.exports = function (app) {
    app.get('/administration/users', user.getUsers);
};
