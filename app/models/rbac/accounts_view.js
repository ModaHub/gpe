// accounts.js
'use strict';

var accounts = orm.Model.extend({
  tableName: 'accounts',

  users: function() {
      return this.hasMany(User);
  }
});

module.exports = orm.model("accounts", accounts);
