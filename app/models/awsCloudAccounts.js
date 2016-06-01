// cloudAccounts.js
'use strict';

var orm 	 	   = require('./orm');

var aws_cloud_accounts = orm.Model.extend({
  tableName: 'aws_cloud_accounts'
});

orm.model("aws_cloud_accounts", aws_cloud_accounts);

module.exports = orm;
