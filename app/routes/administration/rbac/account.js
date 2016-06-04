// app/routes/administration/rbac/account.js
var Account = require ('../../../controllers/administration/rbac/accountCtrl.js');

module.exports = function (app) {
    app.get('/accounts/', Account.getAccounts);
    app.get('/:cloud_provider/accounts/', Account.getAccounts);
    app.get('/:cloud_provider/accounts/:account_id([0-9]+)', Account.getAccount);
    app.get('/:cloud_provider/accounts/:account_id([0-9]+/users)', Account.getUsersIntoAccount);

    app.post('/:cloud_provider/accounts', Account.postAccount);

//    app.put('/accounts/:account_id', Account.putAccount);

    app.delete('/:cloud_provider/accounts/:account_id', Account.deleteAccount);
};
