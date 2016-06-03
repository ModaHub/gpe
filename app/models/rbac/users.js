// users.js
'use strict';

var users = orm.Model.extend({
  tableName: 'users',
  accounts: function() {
      return this.hasOne(Account);
  }
});

module.exports = orm.model("users", users);
