/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('azr_storage_containers', {
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
		metadata: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		storage_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'azr_storage',
				key: 'id'
			}
		}
	}, {
		tableName: 'azr_storage_containers'
	});
};
