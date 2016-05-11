/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('aws_cloud_accounts', {
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
		type: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		aws_access_key_id: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		aws_secret_access_key_id: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		aws_account_id: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		aws_canonical_user_id: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'users',
				key: 'id'
			}
		}
	}, {
		tableName: 'aws_cloud_accounts'
	});
};
