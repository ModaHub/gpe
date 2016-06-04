// azr_storage_accounts.js
'use strict';

var azr_storage_accounts = orm.Model.extend({
  tableName: 'azr_storage_accounts',

  azr_accounts: function() {
  	return this.belongsTo(azrAccount);
  }
});

module.exports = orm.model("azr_storage_accounts", azr_storage_accounts);
