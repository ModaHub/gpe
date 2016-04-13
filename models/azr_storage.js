/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('azr_storage', {
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
		azr_storage_account_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'azr_storage_accounts',
				key: 'id'
			}
		}
	}, {
		tableName: 'azr_storage'
	});
};
