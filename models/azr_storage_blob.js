/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('azr_storage_blob', {
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
		azr_blob_type: {
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
		content_disposition: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		lease_id: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		lease_duration: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		container_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'azr_storage_containers',
				key: 'id'
			}
		},
		blob_level: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		blob_position: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'azr_storage_blob'
	});
};
