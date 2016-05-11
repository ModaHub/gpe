// storage.js
'use strict';

var orm = require('./orm');

var storage = orm.Model.extend({
  tableName: 'storage'
});

module.exports = orm.model('storage', storage);
