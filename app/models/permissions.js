/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('permissions', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    resource_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'azr_storage_objects',
        key: 'id'
      }
    },
    operation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'operations',
        key: 'id'
      }
    }
  }, {
    tableName: 'permissions',
    freezeTableName: true
  });
};
