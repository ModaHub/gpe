module.exports = {
	getQuery: function (res, object, datas) {
    	object.where(datas)
        .fetchAll()
        .then(function(result){
            if (null === result)
                return res.status(200).json([]);
            else
                return res.status(200).json(result);
    	})
        .catch(function(error) {
            return res.status(400).json(error);
    	});
	}
};
