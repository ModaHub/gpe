// aws_storages.js
'use strict';

var aws_storages = orm.Model.extend({
  tableName: 'aws_storages'
});

module.exports = orm.model("aws_storages", aws_storages);
