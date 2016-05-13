// azr_storage.js
'use strict';

var azr_storage = orm.Model.extend({
  tableName: 'azr_storage'
});

module.exports = orm.model("azr_storage", azr_storage);
