// aws_storage.js
'use strict';

var aws_storage = orm.Model.extend({
  tableName: 'aws_storage'
});

module.exports = orm.model("aws_storage", aws_storage);
