// app/routes/services/storage/s3.js
var S3 = require ('../../../controllers/services/storage/S3Ctrl.js');

module.exports = function (app) {
	/**GET**/
    app.get('/storages/:cloud_vendor/:storage_id([0-9]+)/retrieve', S3.retrieveAWSContainers);
}
