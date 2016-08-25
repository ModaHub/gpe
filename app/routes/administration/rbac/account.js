// app/routes/administration/rbac/account.js
var Account = require ('../../../controllers/administration/rbac/accountCtrl.js');

module.exports = function (app) {
    app.get('/accounts/', Account.getAllAccounts);
    app.get('/accounts/:cloud_vendor', Account.getAccounts);
    app.get('/accounts/:cloud_vendor/:account_id([0-9]+)', Account.getAccount);
    app.get('/accounts/:cloud_vendor/:account_id([0-9]+)/users', Account.getAccountUsers);

    app.post('/accounts/:cloud_vendor', Account.postAccount);

    app.put('/accounts/:cloud_vendor/:account_id([0-9]+)', Account.putAccount);

    app.delete('/accounts/:cloud_vendor/:account_id([0-9]+)', Account.deleteAccount);
};
