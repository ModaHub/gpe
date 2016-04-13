/* jshint indent: 1 */

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
			allowNull: false,
			primaryKey: true
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		creation_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		acl: {
			type: DataTypes.ENUM('private','public-read','public-read-write','authenticated-read','aws-exec-read','bucket-owner-read','bucket-owner-full-control'),
			allowNull: false
		},
		storage_class: {
			type: DataTypes.ENUM('STANDARD','STANDARD_IA','REDUCED_REDUNDANCY'),
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
			allowNull: true
		},
		cache_disposition: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		cache_encoding: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		expect: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		request_payment: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		versionning: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		policy_configuration: {
			type: DataTypes.JSON,
			allowNull: true
		},
		logging: {
			type: DataTypes.JSON,
			allowNull: true
		},
		lifecycle_configuration: {
			type: DataTypes.JSON,
			allowNull: true
		},
		notification_configuration: {
			type: DataTypes.JSON,
			allowNull: true
		},
		xregion_replication: {
			type: DataTypes.JSON,
			allowNull: true
		},
		tagging_configuration: {
			type: DataTypes.JSON,
			allowNull: true
		},
		storage_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'aws_storage',
				key: 'id'
			}
		}
	}, {
		tableName: 'aws_storage_containers'
	});
};
