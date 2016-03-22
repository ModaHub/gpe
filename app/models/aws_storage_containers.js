/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aws_storage_containers', {
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
    amz_storage_class: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    region: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    size: {
      type: DataTypes.BIGINT,
      allowNull: false
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
    }
  }, {
    tableName: 'aws_storage_containers',
    freezeTableName: true
  });
};
