// azr_storage_accounts.js
'use strict';

var azr_storage_accounts = orm.Model.extend({
  tableName: 'azr_storage_accounts'
});

module.exports = orm.model("azr_storage_accounts", azr_storage_accounts);
