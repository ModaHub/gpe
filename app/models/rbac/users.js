// users.js
'use strict';

var users = orm.Model.extend({
  tableName: 'users'
});

module.exports = orm.model("users", users);
