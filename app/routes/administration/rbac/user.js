// app/routes/administration/rbac/user.js
var User = require ('../../../controllers/administration/rbac/userCtrl.js');

module.exports = function (app) {
    app.get('/users/', User.getUsers);
    app.get('/users/:user_id', User.getUser);
    app.get('/users/:user_id/accounts', User.getAccountsIntoUser);

    app.post('/users', User.postUser);

    app.put('/users/:user_id', User.putUser);

    app.delete('/users/:user_id', User.deleteUser);
};
