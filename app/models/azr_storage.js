// azr_storage.js
'use strict';

var Bookshelf = require('./bookshelf');

var azr_storage = Bookshelf.Model.extend({
  tableName: 'azr_storage'
});

module.exports = Bookshelf.model('azr_storage', azr_storage);
