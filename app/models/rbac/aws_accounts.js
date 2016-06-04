// aws_accounts.js
'use strict';

var aws_accounts = orm.Model.extend({
  tableName: 'aws_accounts',

  users: function() {
  	return this.hasMany(User);
  }
});

module.exports = orm.model("aws_accounts", aws_accounts);
