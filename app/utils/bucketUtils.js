module.exports = {
    formatBuckets: function (s3, buckets, req, res) {
    	var formated_buckets = new Array();
		for (var bucket of buckets) {
	        var date   = new Date();
	        var params = {
	        	Bucket: bucket.Name
	        };

	        formated_buckets.push(
	            {
	                name:            bucket.Name,
	                creation_date:   bucket.CreationDate,
	                storage_id:      req.storage.id,
	                description:     '',
					acl:             'private',
					storage_class:   'STANDARD_IA',
					region:          '',
					size:            '0',
					expect:          '1',
					request_payment: '0',
					versionning:     '0'
	            }
	        );

	        s3.getBucketAcl(params, function (err, data) {
	        	if (err) {
	        		return res.status(500).json({
	        			s3:   'getBucketAcl',
                        code: err.codeStatus,
                        msg:  err.message,
                    });
	        	} else {
	        		// push dans rabbitmq ici ???
	        	}
	        });
	    }

	    return formated_buckets;
    }
};



