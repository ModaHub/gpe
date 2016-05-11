// aws_storage_containers.js
'use strict';

var orm = require('./orm');

var aws_storage_containers = orm.Model.extend({
  tableName: 'aws_storage_containers'
});

module.exports = orm.model('aws_storage_containers', aws_storage_containers);
