// accounts.js
'use strict';

var accounts = orm.Model.extend({
  tableName: 'accounts'
});

module.exports = orm.model("accounts", accounts);
