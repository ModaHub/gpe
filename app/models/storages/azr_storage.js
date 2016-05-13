// azr_storage.js
'use strict';

var orm = require('../orm');

var azr_storage = orm.Model.extend({
  tableName: 'azr_storage'
});

module.exports = azr_storage;
