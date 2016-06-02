// azr_accounts.js
'use strict';

var azr_accounts = orm.Model.extend({
  tableName: 'azr_accounts'
});

module.exports = orm.model("azr_accounts", azr_accounts);
