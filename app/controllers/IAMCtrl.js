// app/controllers/services/IAMCtrl.js
// ======================= GET =======================
module.exports.getIAMUsers = function(req, res) {
    aws_cloud_accounts = req.app.get('models').Aws_cloud_accounts;
    aws_cloud_accounts
    .forge({login: 'bouren_n@etna-alternance.net', type: 'root'})
    .fetch({withRelated: ['users']})
    .then(function (result) {
        if (null === result) {
            console.log('coucou');
            return res.status(200).json([]);
        }
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
