// azr_accounts.js
'use strict';

var azr_accounts = orm.Model.extend({
  tableName: 'azr_accounts',

  users: function() {
  	return this.hasMany(User);
  },
  azr_storage_accounts: function() {
  	return this.hasMany(azrStorageAccount);
  }
});

module.exports = orm.model("azr_accounts", azr_accounts);
