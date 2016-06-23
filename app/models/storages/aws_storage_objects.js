// aws_storage_objects.js
'use strict';

var aws_storage_objects = orm.Model.extend({
  tableName: 'aws_storage_objects'
});

module.exports = orm.model("aws_storage_objects", aws_storage_objects);
