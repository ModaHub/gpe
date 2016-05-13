// azr_storage.js
'use strict';

var orm = require('../orm');

var azr_storage_containers = orm.Model.extend({
  tableName: 'azr_storage_containers'
});

module.exports = azr_storage_containers;
