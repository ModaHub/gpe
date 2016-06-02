// rbac.js
'use strict';

var resources = orm.Model.extend({
  tableName: 'resources'
});

module.exports = orm.model("resources", resources);
