// app/controllers/services/storage/S3Ctrl.js
var storage = require('./storageCtrl.js');

// ======================= GET =======================
module.exports.syncAWSContainers = function(req, res) {
  var QRB = req.app.get('QRB');
  var awsTools = req.app.get('awsTools');

  QRB('accounts')
  .where({
    user_id: '1',
    cloud_vendor: 'aws'
  })
  .select()
  .first()
  .then(function (datas) {
    if (null === datas)
    return res.status(200).json([]);
    else {
      awsTools.config.update({
        accessKeyId:     datas.aws_access_key_id,
        secretAccessKey: datas.aws_secret_access_key_id
      });
      var s3 = new awsTools.S3({signatureVersion: 'v4'});

      s3.listBuckets(function(err, data) {
        if (err) console.log(err, err.codeStatus, err.message);
        else {
          for (var i in data.Buckets) {
            console.log(data.Buckets[i]);

            var bucket = {
              name:            data.Buckets[i].Name,
              description:     '',
              creation_date:   '2016-08-25 19:55:38.742333+02',
              acl:             'private',
              storage_class:   'STANDARD_IA',
              region:          '',
              size:            '0',
              expect:          '1',
              request_payment: '0',
              versionning:     '0',
              storage_id:      req.storage.id
            };

            QRB.returning('*')
            .insert(bucket)
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
          }
        }
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
