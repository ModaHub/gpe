/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('permissions', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		resource_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'resources',
				key: 'id'
			}
		},
		read: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		write: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		delete: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		read_permission: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		write_permission: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		delete_permission: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		}
	}, {
		tableName: 'permissions'
	});
};
