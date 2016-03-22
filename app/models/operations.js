/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operations', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    read: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    write: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    delete: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    read_permission: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    write_permission: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    delete_permission: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'operations',
    freezeTableName: true
  });
};
