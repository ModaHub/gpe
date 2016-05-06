module.exports = {
    inArray: function (str, array) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            if (array[i] == str) {
                return true;
            }
        }
        return false;
    }
};
