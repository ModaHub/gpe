/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('aws_storage', {
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
		aws_cloud_account_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'aws_cloud_accounts',
				key: 'id'
			}
		}
	}, {
		tableName: 'aws_storage'
	});
};
