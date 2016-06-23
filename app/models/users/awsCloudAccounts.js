// cloudAccounts.js
'use strict';

var Aws_cloud_accounts = orm.Model.extend({
  tableName: 'aws_accounts',

  users: function() {
    return this.belongsTo('Users');
  }
});

orm.model("Aws_cloud_accounts", Aws_cloud_accounts);
