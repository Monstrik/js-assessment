exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    indexOf: function (arr, item) {
        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
        return -1;
    },

    sum: function (arr) {
        var sum = 0;
        for (var i = 0, len = arr.length; i < len; i++) {
            sum = sum + arr[i];
        }
        return sum;
    },

    remove: function (arr, item) {
        var retArray = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] !== item) {
                retArray.push(arr[i]);
            }
        }
        return retArray;
    },

    removeWithoutCopy: function (arr, item) {
        var i;
        var len;
        for (i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--;
                len--;
            }
        }
        return arr;
    },

    append: function (arr, item) {
        arr.push(item);
        return arr;
    },

    truncate: function (arr) {
        arr.pop();
        return arr;
    },

    prepend: function (arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail: function (arr) {
        arr.shift(arr);
        return arr;
    },

    concat: function (arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert: function (arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count: function (arr, item) {
        var c = 0;
        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                c++;
            }
        }
        return c;
    },

    duplicates: function (arr) {
        var seen = {};
        var dupes = [];

        for (var i = 0, len = arr.length; i < len; i++) {
            seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
        }

        for (var item in seen) {
            if (seen.hasOwnProperty(item) && seen[item] > 1) {
                dupes.push(item * 1);
            }
        }

        return dupes;
    },

    square: function (arr) {
        var retArray = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            retArray.push(arr[i] * arr[i]);
        }
        return retArray;
    },

    findAllOccurrences: function (arr, target) {
        var retArray = [];

        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === target) {
                retArray.push(i);
            }
        }
        return retArray;
    }
};
