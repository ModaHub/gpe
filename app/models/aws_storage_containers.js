// aws_storage_containers.js
'use strict';

var Bookshelf = require('./bookshelf');

var aws_storage_containers = Bookshelf.Model.extend({
  tableName: 'aws_storage_containers'
});

module.exports = Bookshelf.model('aws_storage_containers', aws_storage_containers);
