/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resources', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		item_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'aws_storage',
				key: 'id'
			}
		},
		item_type: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'resources'
	});
};
