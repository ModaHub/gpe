module.exports = {
	getParams: function (buckets) {
		var params = new Array;

		for (var bucket of buckets) {
			params.push({
				name: bucket.Name,
				creation_date: bucket.CreationDate
			})
		}

		return params;
	},
	getPromises: function (Q, S3, param) {
		bucket_name            = Q.when(param);
		bucket_location        = Q.ninvoke(S3, 'getBucketLocation',       { Bucket: param.name });
		bucket_versionning     = Q.ninvoke(S3, 'getBucketVersioning',     { Bucket: param.name });
		bucket_request_payment = Q.ninvoke(S3, 'getBucketRequestPayment', { Bucket: param.name });

		return [
			bucket_name,
			bucket_location,
			bucket_versionning,
			bucket_request_payment
		];
	},
	getQAllPromises: function (Q, S3, params) {
		var promises = [];

		for (var param of params) {
			promises.push(Q.all(this.getPromises(Q, S3, param)));
		}

		return promises;
	},
	pullDatas: function (req, Buckets) {
		var datas = [];
		for (var bucket of Buckets) {
			var data  = {};
			for (var index in bucket) {
				if (Object.keys(bucket[index]).length === 0) {
					continue;
				}
				switch (index) {
					case '0':
					data.name            = bucket[index].name;
					data.creation_date   = bucket[index].creation_date;
					break;
					case '1':
					data.region          = '';
					break;
					case '2':
					data.versionning     = '0';
					break;
					case '3':
					data.request_payment = '0';
					break;
					default:
					break;
				}
			}
			data.description   = '';
			data.size          = '0';
			data.acl           = 'private';
			data.expect        = '1';
			data.storage_id    = req.storage.id;
			data.storage_class = 'STANDARD_IA';
			data.versionning   = '0';
			datas.push(data);
		}

		return datas;
	}
}
