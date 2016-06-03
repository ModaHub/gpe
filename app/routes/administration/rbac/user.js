// app/routes/administration/rbac/user.js
var User = require ('../../../controllers/administration/rbac/userCtrl.js');

module.exports = function (app) {
    app.get('/users/', User.getUsers);
    app.get('/users/:user_id', User.getUser);
    app.get('/users/:user_id/accounts', User.getAccountsIntoUser);

    app.post('/users', User.postUser);
//    app.post('/users/:user_id/accounts/:account_id', User.postAccountIntoUser);

//    app.put('/users/:user_id', User.updateUser);

    app.delete('/users/:user_id', User.deleteUser);
//    app.delete('/users/:user_id/accounts/:account_id', User.deleteAccountIntoUser);
};
