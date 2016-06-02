// permissions.js
'use strict';

var permissions = orm.Model.extend({
  tableName: 'permissions'
});

module.exports = orm.model("permissions", permissions);
