// app/routes/administration/rbac/user.js
var User = require ('../../../controllers/administration/rbac/userCtrl.js');

module.exports = function (app) {
    app.get('/users/', User.getUsers);
    app.get('/users/:user_id', User.getUser);

    app.post('/users', User.addUser);

    app.put('/users/:id', User.updateUser);

    app.delete('/users/:user_id', User.deleteUser);
};
