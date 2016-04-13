/* jshint indent: 1 */

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
		storage_class: {
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
			type: DataTypes.JSON,
			allowNull: true
		},
		amz_website_redirect_location: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		bucket_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'aws_storage_buckets',
				key: 'id'
			}
		},
		object_level: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		object_position: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'aws_storage_objects'
	});
};
