/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('aws_permission_configuration', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		grantee: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		grant_full_control: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		},
		grant_read: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		},
		grant_read_acp: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		},
		grant_write_acp: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		},
		item_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'aws_storage_objects',
				key: 'id'
			}
		}
	}, {
		tableName: 'aws_permission_configuration'
	});
};
