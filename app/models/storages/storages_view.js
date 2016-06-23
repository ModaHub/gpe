// storages.js
'use strict';

var storages = orm.Model.extend({
  tableName: 'storages'
});

module.exports = orm.model("storages", storages);
