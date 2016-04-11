'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {

		queryInterface.createTable(
			'aws_cloud_accounts',
			{
				id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true
				},
				login: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				password: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				token: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				user_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'users',
						key: 'id'
					}
				}, {
					tableName: 'aws_cloud_accounts',
					freezeTableName: true
				}
			});

		queryInterface.createTable(
			'aws_storage_containers',
			{
				id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true
				},
				name: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				description: {
					type: Sequelize.TEXT,
					allowNull: true
				},
				amz_storage_class: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				region: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				size: {
					type: Sequelize.BIGINT,
					allowNull: false
				},
				cache_control: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				cache_disposition: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				cache_encoding: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				expect: {
					type: Sequelize.BOOLEAN,
					allowNull: false
				},
				cors_configuration: {
					type: Sequelize.TEXT,
					allowNull: true
				}
				, {
					tableName: 'aws_storage_containers',
					freezeTableName: true
				}
			});

		queryInterface.createTable(
			'aws_storage_objects',
			{
				id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true
				},
				name: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				description: {
					type: Sequelize.TEXT,
					allowNull: true
				},
				amz_storage_class: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				type: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				size: {
					type: Sequelize.BIGINT,
					allowNull: false
				},
				language: {
					type: Sequelize.TEXT,
					allowNull: true
				},
				md5hash: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				metadata: {
					type: Sequelize.TEXT,
					allowNull: true
				},
				amz_website_redirect_location: {
					type: Sequelize.TEXT,
					allowNull: true
				},
				container_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'aws_storage_containers',
						key: 'id'
					}
				}, {
					tableName: 'aws_storage_objects',
					freezeTableName: true
				}
			});

		queryInterface.createTable(
			'azr_cloud_accounts',
			{
				id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true
				},
				login: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				password: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				token: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				azr_storage_account_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'azr_storage_accounts',
						key: 'id'
					},
					user_id: {
						type: Sequelize.INTEGER,
						allowNull: false,
						references: {
							model: 'users',
							key: 'id'
						}
					}
				}, {
					tableName: 'azr_cloud_accounts',
					freezeTableName: true
				}
			});

		queryInterface.createTable(
			'azr_storage_accounts',
			{
				id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true
				},
				signature: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				name: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				description: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				label: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				location: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				georeplication: {
					type: Sequelize.BOOLEAN,
					allowNull: false
				},
				names: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				values: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				secondaryread: {
					type: Sequelize.BOOLEAN,
					allowNull: false
				},
				type: {
					type: Sequelize.ENUM('Standard_LRS','Standard_ZRS','Standard_GRS','Standard_RAGRS','Premium_LRS'),
					allowNull: false
				}, {
					tableName: 'azr_storage_accounts',
					freezeTableName: true
				}
			});

		queryInterface.createTable(
			'azr_storage_containers',
			{
				id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true
				},
				name: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				description: {
					type: Sequelize.TEXT,
					allowNull: true
				},
				cache_control: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				cache_disposition: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				cache_encoding: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				expect: {
					type: Sequelize.BOOLEAN,
					allowNull: false
				},
				cors_configuration: {
					type: Sequelize.TEXT,
					allowNull: true
				},
				metadata: {
					type: Sequelize.TEXT,
					allowNull: true
				}, {
					tableName: 'azr_storage_containers',
					freezeTableName: true
				}
			});

		queryInterface.createTable(
			'azr_storage_objects',
			{
				id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true
				},
				name: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				description: {
					type: Sequelize.TEXT,
					allowNull: true
				},
				azr_blob_type: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				type: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				size: {
					type: Sequelize.BIGINT,
					allowNull: false
				},
				language: {
					type: Sequelize.TEXT,
					allowNull: true
				},
				md5hash: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				metadata: {
					type: Sequelize.TEXT,
					allowNull: true
				},
				content_disposition: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				lease_id: {
					type: Sequelize.TEXT,
					allowNull: true
				},
				lease_duration: {
					type: Sequelize.INTEGER,
					allowNull: true
				},
				container_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'azr_storage_containers',
						key: 'id'
					}
				}, {
					tableName: 'azr_storage_objects',
					freezeTableName: true
				}
			});

		queryInterface.createTable(
			'groups',
			{
				id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true
				},
				name: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				description: {
					type: Sequelize.TEXT,
					allowNull: true
				},
				category: {
					type: Sequelize.TEXT,
					allowNull: false
				}, {
					tableName: 'groups',
					freezeTableName: true
				}
			});

		queryInterface.createTable(
			'link_groups_permissions',
			{
				id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true
				},
				group_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'groups',
						key: 'id'
					}
				},
				permission_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'permissions',
						key: 'id'
					}, {
						tableName: 'link_groups_permissions',
						freezeTableName: true
					}
				})

		queryInterface.createTable(
			'link_groups_users',
			{
				id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true
				},
				group_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'groups',
						key: 'id'
					}
				},
				user_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'users',
						key: 'id'
					}
				}, {
					tableName: 'link_groups_users',
					freezeTableName: true
				}
			});

		queryInterface.createTable(
			'operations',
			{
				id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true
				},
				read: {
					type: Sequelize.BOOLEAN,
					allowNull: false
				},
				write: {
					type: Sequelize.BOOLEAN,
					allowNull: false
				},
				remove: {
					type: Sequelize.BOOLEAN,
					allowNull: false
				},
				read_permission: {
					type: Sequelize.BOOLEAN,
					allowNull: false
				},
				write_permission: {
					type: Sequelize.BOOLEAN,
					allowNull: false
				},
				remove_permission: {
					type: Sequelize.BOOLEAN,
					allowNull: false
				}, {
					tableName: 'operations',
					freezeTableName: true
				}
			});

		queryInterface.createTable(
			'permissions',
			{
				id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true
				},
				resource_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'azr_storage_objects',
						key: 'id'
					}
				},
				operation_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: 'operations',
						key: 'id'
					}
				}, {
					tableName: 'permissions',
					freezeTableName: true
				}
			});


		queryInterface.createTable(
			'users',
			{
				id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true
				},
				login: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				password: {
					type: Sequelize.TEXT,
					allowNull: false
				},
				description: {
					type: Sequelize.TEXT,
					allowNull: true
				},
				fname: {
					type: Sequelize.TEXT,
					allowNull: true
				},
				lname: {
					type: Sequelize.TEXT,
					allowNull: true
				},
				email: {
					type: Sequelize.TEXT,
					allowNull: true
				}, {
					tableName: 'users',
					freezeTableName: true
				}
			});
},

down: function (queryInterface, Sequelize) {

}
};