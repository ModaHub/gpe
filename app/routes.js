// app/routes.js

//HOME
var user = require ('routes/home/dashboard.js')
var user = require ('routes/home/checklist.js')

//ADMINISTRATION
var user = require ('routes/administration/identity/user.js')
var user = require ('routes/administration/identity/group.js')
var user = require ('routes/administration/maintenance/maintenance.js')
var user = require ('routes/administration/right/right.js')
var user = require ('routes/administration/right/resource.js')

//MODULES
var user = require ('routes/modules/authentication.js')

//SERVICES
var user = require ('routes/services/application.js')
var user = require ('routes/services/compute.js')
var user = require ('routes/services/database.js')
var user = require ('routes/services/network.js')
var user = require ('routes/services/security.js')
var user = require ('routes/services/storage.js')
var user = require ('routes/services/system.js')
