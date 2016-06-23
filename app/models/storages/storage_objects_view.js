//storage_objects_view.js
'use strict';

var storage_objects = orm.Model.extend({
  tableName: 'storage_objects'
});

module.exports = orm.model("storage_objects", storage_objects);

