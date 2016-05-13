// azr_storage.js
'use strict';

var azr_storage_containers = orm.Model.extend({
  tableName: 'azr_storage_containers'
});

module.exports = orm.model("azr_storage_containers", azr_storage_containers);
