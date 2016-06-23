// cloudAccounts.js
'use strict';

var Aws_cloud_accounts = require('./awsCloudAccounts');

var Users = orm.Model.extend({
  tableName: 'users',

  aws_cloud_accounts: function() {
    return this.hasMany('Aws_cloud_accounts');
  }
});

orm.model("Users", Users);

