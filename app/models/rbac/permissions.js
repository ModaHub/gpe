// permissions.js
'use strict';

var permissions = orm.Model.extend({
  tableName: 'permissions',

  groups: function() {
  	return this.belongToMany(Group, 'link_groups_permission');
  }
});

module.exports = orm.model("permissions", permissions);
