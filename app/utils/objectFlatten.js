var objectFlatten = function (obj) {
    var flattened = {};
    var ret       = {};
    for (var sub_obj in obj) {
        if (!obj.hasOwnProperty(sub_obj)) {
            continue;
        }
        if (typeof(obj[sub_obj]) === 'object' && obj[sub_obj] !== null) {
            flattened = objectFlatten(obj[sub_obj]);
            for (var flat_sub_obj in flattened) {
                if (!flattened.hasOwnProperty(flat_sub_obj)) {
                    continue;
                }
                ret[sub_obj + '/' + flat_sub_obj] = flattened[flat_sub_obj];
            }
        } else {
            ret[sub_obj] = obj[sub_obj];
        }
    }
    return ret;
};

module.exports = function (obj) {
    return objectFlatten(obj);
};
