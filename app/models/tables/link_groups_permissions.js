/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('link_groups_permissions', {
		group_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'groups',
				key: 'id'
			}
		},
		permission_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'permissions',
				key: 'id'
			}
		}
	}, {
		tableName: 'link_groups_permissions'
	});
};
