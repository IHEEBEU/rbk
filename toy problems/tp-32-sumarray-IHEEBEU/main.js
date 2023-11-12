/**
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 *
 *
 * @function sumArray
 * @param {Array} array
 * @return {Number}
 */
// Solved in O(n) time with O(1) memory
const sumArray = function (array) {
    var res = array[0]
    var max = array[0]
    for (var i = 1; i < array.length; i++) {
        res = Math.max(array[i], res + array[i])
        max = Math.max(max, res)
    }
    return max
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = sumArray;
// // // // // // // // // //
