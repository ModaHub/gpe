// app/routes/services/IAM/IAM.js
var IAM = require ('../../../controllers/administration/authentication/IAMCtrl.js');

module.exports = function (app) {
	/**GET**/
    app.get('/aws/iam/users', IAM.getIAMUsers);

}
