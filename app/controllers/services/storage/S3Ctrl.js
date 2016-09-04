// app/controllers/services/storage/S3Ctrl.js
var storage     = require('./storageCtrl.js');
var bucketUtils = require('../../../utils/bucketUtils.js');

// ======================= GET =======================
module.exports.syncAWSContainers = function(req, res) {
    var QRB       = req.app.get('QRB');
    var awsTools  = req.app.get('awsTools');

    QRB('accounts')
    .where({
        user_id: '1',
        cloud_vendor: 'aws'
    })
    .select()
    .first()
    .then(function (datas) {
        if (null === datas) {
          return res.status(200).json([]);
        }
        else {
            awsTools.config.update({
                accessKeyId:     datas.aws_access_key_id,
                secretAccessKey: datas.aws_secret_access_key_id
            });
            var s3      = new awsTools.S3({signatureVersion: 'v4'});
            var buckets = new Array();

            s3.listBuckets(function(err, data) {
                if (err) {
                    return res.status(500).json({
                        s3:   'listBuckets',
                        code: err.codeStatus,
                        msg:  err.message,
                    });
                }
                buckets = bucketUtils.formatBuckets(s3, data.Buckets, req, res);

                return res.status(200).json(buckets);
                QRB.returning('*')
                .insert(buckets)
                .into('aws_storage_containers')
                .then(function (container) {
                    return res.status(201).json(container);
                })
                .catch(function (error) {
                    return res.status(400).json({
                        msg:   "Error when writing datas",
                        error: error
                    });
                });
            });
        }
    })
    .catch(function(error) {
    res.status(400).json(error);
    });
}

// ======================= POST =======================


// ======================= PUT =======================


// ======================= DELETE =======================
