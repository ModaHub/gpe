// app/routes/administration/rbac/user.js
var User = require ('../../../controllers/administration/rbac/userCtrl.js');

module.exports = function (app) {
    app.get('/users/', User.getUsers);
    app.get('/users/:user_id([0-9]+)', User.getUser);
    app.get('/users/:user_id([0-9]+)/accounts', User.getUserAccounts);

    app.post('/users', User.postUser);

    app.put('/users/:user_id([0-9]+)', User.putUser);

    app.delete('/users/:user_id([0-9]+)', User.deleteUser);
};
