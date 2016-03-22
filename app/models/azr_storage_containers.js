/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('azr_storage_containers', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cache_control: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cache_disposition: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cache_encoding: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    expect: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    cors_configuration: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'azr_storage_containers',
    freezeTableName: true
  });
};
