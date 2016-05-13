// storage_containers.js
'use strict';

var storage_containers = orm.Model.extend({
  tableName: 'storage_containers'
});

module.exports = orm.model("storage_containers", storage_containers);
