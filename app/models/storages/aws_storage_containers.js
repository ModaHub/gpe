// aws_storage_containers.js
'use strict';

var aws_storage_containers = orm.Model.extend({
  tableName: 'aws_storage_containers'
});

module.exports = orm.model("aws_storage_containers", aws_storage_containers);
