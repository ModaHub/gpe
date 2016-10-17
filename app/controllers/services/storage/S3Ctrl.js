// app/controllers/services/storage/S3Ctrl.js
var storage     = require('./storageCtrl.js');
var bucketUtils = require('../../../utils/bucketUtils.js');

// ======================= GET =======================
module.exports.pullAWSBuckets = function(req, res) {
  var QRB      = req.app.get('QRB');
  var Q        = req.app.get('Q');
  var awsTools = req.app.get('awsTools');

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
    console.log(bucket_list);
    bucket_list
    .then(function (result) {
      var params   = bucketUtils.getParams(result.Buckets);
      var promises = bucketUtils.getQAllPromises(Q, S3, params);

      Q.all(promises)
      .then(function (Buckets) {
        QRB.returning('*')
        .insert(bucketUtils.pullDatas(req, Buckets))
        .into('aws_storage_containers')
        .then(function (container) {
          return res.status(201).json(container);
        })
        .catch(function (error) {
          console.log(error.code)
          if ( error.code == 245 ) {
            return res.status(200).json({
              msg:   "Data already synced",
              error: error
            });
          } else {
            return res.status(200).json({
              msg:   "Error when writing datas",
              error: error.code
            });
          }
        })
      })
    })
    .catch(function (error) {
      res.result(500).json("error");
    })
  });
}

module.exports.pushAWSContainers = function(req, res) {

}

// ======================= POST =======================


// ======================= PUT =======================


// ======================= DELETE =======================
