/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('azr_cloud_accounts', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    login: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    azr_storage_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'azr_storage_accounts',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'azr_cloud_accounts',
    freezeTableName: true
  });
};
