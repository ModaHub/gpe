// azr_storage_objects.js
'use strict';

var azr_storage_objects = orm.Model.extend({
  tableName: 'azr_storage_objects'
});

module.exports = orm.model("azr_storage_objects", azr_storage_objects);
