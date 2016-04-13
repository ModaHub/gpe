/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cors_configuration', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		allowed_headers: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		allowed_methods: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		allowed_origins: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		expose_headers: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		max_age_seconds: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		item_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'azr_storage_containers',
				key: 'id'
			}
		}
	}, {
		tableName: 'cors_configuration'
	});
};
