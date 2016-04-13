/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('azr_storage_accounts', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		signature: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		name: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		type: {
			type: DataTypes.ENUM('Standard_LRS','Standard_ZRS','Standard_GRS','Standard_RAGRS','Premium_LRS'),
			allowNull: false
		},
		label: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		location: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		georeplication: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		names: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		values: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		secondaryread: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		}
	}, {
		tableName: 'azr_storage_accounts'
	});
};
