// app/controllers/services/IAMCtrl.js
var orm            = require("../models/awsCloudAccounts");
aws_cloud_accounts = orm._models.aws_cloud_accounts;

// ======================= GET =======================
module.exports.getIAMUsers = function(req, res) {
    aws_cloud_accounts
    .where({login: 'bouren_n@etna-alternance.net', type: 'IAM'})
    .fetch()
    .then(function (result) {
        if (null === result)
            return res.status(200).json([]);
        else {
            var awsTools = req.app.get('awsTools');
            awsTools.config.update({
                accessKeyId:     result.get('aws_access_key_id'),
                secretAccessKey: result.get('aws_secret_access_key_id')
            });
            var iam = new awsTools.IAM();
            iam.listUsers([], function (error, data) {
                if (error)
                    console.log(error, error.stack);
                else
                    res.status(200).json(data);
            })
        }
    })
    .catch(function(error) {
        return res.status(400).json(error);
    });
}

// ======================= POST =======================


// ======================= PUT =======================


// ======================= DELETE =======================
