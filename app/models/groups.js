/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('groups', {
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
		type: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'groups'
	});
};
