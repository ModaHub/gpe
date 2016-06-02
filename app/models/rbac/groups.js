// groups.js
'use strict';

var groups = orm.Model.extend({
  tableName: 'groups'
});

module.exports = orm.model("groups", groups);
