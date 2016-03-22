/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aws_storage_objects', {
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
    type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    size: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    language: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    md5hash: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    amz_website_redirect_location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    container_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'aws_storage_containers',
        key: 'id'
      }
    }
  }, {
    tableName: 'aws_storage_objects',
    freezeTableName: true
  });
};
