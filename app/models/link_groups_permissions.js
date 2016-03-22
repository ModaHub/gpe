/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('link_groups_permissions', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'groups',
        key: 'id'
      }
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'permissions',
        key: 'id'
      }
    }
  }, {
    tableName: 'link_groups_permissions',
    freezeTableName: true
  });
};
