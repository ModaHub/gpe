// app/controllers/administration/authentication/IAMCtrl.js
// ======================= GET =======================
module.exports.getIAMUsers = function(req, res) {
    var QRB = req.app.get('QRB');

    QRB('aws_accounts')
    .where({
        login: 'bouren_n@etna-alternance.net',
        type: 'root'
    })
    .select()
    .first()
    .then(function (datas) {
        if (null === datas)
            return res.status(200).json([]);
        else {
            var awsTools = req.app.get('awsTools');
            awsTools.config.update({
                accessKeyId:     datas.aws_access_key_id,
                secretAccessKey: datas.aws_secret_access_key_id
            });
            var iam = new awsTools.IAM();
            iam.listUsers([], function (error, data) {
                if (error)
                    console.log(error, error.stack);
                else
                    return res.status(200).json(data);
            })
        }
    })
    .catch(function(error) {
        res.status(400).json(error);
    });
}

// ======================= POST =======================


// ======================= PUT =======================


// ======================= DELETE =======================
