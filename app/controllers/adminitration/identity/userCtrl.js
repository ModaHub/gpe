// app/routes/administration/identity/user.js
var user = require ('../../../controllers/administration/identity/userCtrl.js')

module.exports = function(app) {
    app.get('/users', user.getUsers);
    app.post('/user/add', user.createUser);
    app.put('/user/update/:id', user.updateUser);
    app.delete('/user/delete/:id', user.updateUser);
};
