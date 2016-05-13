// storage.js
'use strict';

var storage = orm.Model.extend({
  tableName: 'storage'
});

module.exports = orm.model("storage", storage);
