/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('link_groups_users', {
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id'
			}
		},
		group_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'groups',
				key: 'id'
			}
		}
	}, {
		tableName: 'link_groups_users'
	});
};
