// azr_storage.js
'use strict';

var Bookshelf = require('./bookshelf');

var azr_storage_containers = Bookshelf.Model.extend({
  tableName: 'azr_storage_containers'
});

module.exports = Bookshelf.model('azr_storage_containers', azr_storage_containers);
