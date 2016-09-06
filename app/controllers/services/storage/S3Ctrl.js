// app/controllers/services/storage/S3Ctrl.js
var storage     = require('./storageCtrl.js');
var bucketUtils = require('../../../utils/bucketUtils.js');

// ======================= GET =======================
module.exports.syncAWSContainers = function(req, res) {
    var QRB       = req.app.get('QRB');
    var Q         = req.app.get('Q');
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
        awsTools.config.update({
            accessKeyId:     datas.aws_access_key_id,
            secretAccessKey: datas.aws_secret_access_key_id
        });
        var S3 = new awsTools.S3({signatureVersion: 'v4'});

        bucket_list = Q.ninvoke(S3, 'listBuckets', '');

        bucket_list.then(function (result) {
            for (var bucket of result.Buckets) {
                param = {
                    'Bucket': bucket.Name
                };
                bucket_location           = Q.ninvoke(S3, 'getBucketLocation', param);
                bucket_versionning        = Q.ninvoke(S3, 'getBucketVersioning', param);
                bucket_request_payment    = Q.ninvoke(S3, 'getBucketRequestPayment', param);
                // bucket_logging_conf       = Q.ninvoke(S3, 'getBucketLogging', param);
                // bucket_policy             = Q.ninvoke(S3, 'getBucketPolicy', param);
                // bucket_acl                = Q.ninvoke(S3, 'getBucketAcl', param); A voir avec Nabil
                // bucket_life_cycle_conf    = Q.ninvoke(S3, 'getBucketLifecycleConfiguration', param);
                // bucket_nottification_conf = Q.ninvoke(S3, 'getBucketNotificationConfiguration', param);

                BucketPromised = Q.all([
                    bucket_location,
                    bucket_versionning,
                    bucket_request_payment
                ]);

                BucketPromised
                .spread(function (location, versionning, request_payment) {
                    var Bucket = {
                        name:            bucket.Name,
                        creation_date:   bucket.CreationDate,
                        description:     '',
                        request_payment: request_payment,
                        versionning:     versionning
                        // storage_class:   'STANDARD_IA',
                        // region:          '',
                        // size:            '0',
                        // expect:          '1',
                        // storage_id:      req.storage.id
                    };
                    res.status(200).json(Bucket);
                }).catch(function (error) {
                    res.status(500).json(error)
                })
            }

        })

    })
    .catch(function(error) {
        res.status(400).json(error);
    });
}

// ======================= POST =======================


// ======================= PUT =======================


// ======================= DELETE =======================
