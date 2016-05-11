/* jshint indent: 1 */

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
		azr_subscription_id: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		azr_storage_account_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'azr_storage_accounts',
				key: 'id'
			}
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
		tableName: 'azr_cloud_accounts'
	});
};
