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

 function findAll (array, n) {
   var x=[]
    for(var i=0;i<array.length;i++){
    if (array[i]===n){
        x.push(i)
    }
    
   }return x
};
