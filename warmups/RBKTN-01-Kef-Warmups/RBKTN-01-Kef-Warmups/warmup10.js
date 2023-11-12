/**
 * Given an array of integers and an integer n.
 * find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
 * If n is not in the given array, return an empty array [].
 * Assume that n and all values in the given array will always be integers.
 * Example:
 * findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
 *
 * @param {Array} array
 * @param {number} n
 * @return {Array}
 */

//Here's the each function to save you some time!

function each(coll, func) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for (var key in coll) {
      func(coll[key], key);
    }
  }
}

var findAllWithFor = function (array, n) {
  var x=[]
  for (var i=0;i<array.length;i++){
    if (array[i]===n){
      x.push(i)
    }
  }
  return x
};

//Now refactor it with each


var findAllWithEach = function (array, n) {
  var x=[]
  each(array,function (e,i){if (e===n){
   x.push(i)
 }
})
return x}
[6, 9, 3, 4, 3, 82, 11],3
 

