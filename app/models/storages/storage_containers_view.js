// storage_containers.js
'use strict';

var orm = require('../orm');

var storage_containers = orm.Model.extend({
  tableName: 'storage_containers'
});

module.exports = storage_containers;
