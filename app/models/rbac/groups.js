// groups.js
'use strict';

var groups = orm.Model.extend({
  tableName: 'groups',

  users: function() {
	return this.belongsToMany(User, 'link_groups_users');
  },
  permissions: function() {
	return this.belongsToMany(Permission, 'link_groups_permissions');
  }
});

module.exports = orm.model("groups", groups);
