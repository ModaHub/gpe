// users.js
'use strict';

var users = orm.Model.extend({
  tableName: 'users',

  accounts: function() {
      return this.belongsTo(Account, 'user_id');
  },
  aws_accounts: function() {
      return this.belongsTo(AWSAccount, 'user_id');
  },
  azr_accounts: function() {
      return this.belongsTo(AZRAccount, 'user_id');
  },
  groups: function() {
      return this.belongsToMany(Group, 'link_groups_users');
  }
});

module.exports = orm.model("users", users);
