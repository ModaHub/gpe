// azr_storages.js
'use strict';

var azr_storages = orm.Model.extend({
  tableName: 'azr_storages'
});

module.exports = orm.model("azr_storages", azr_storages);
