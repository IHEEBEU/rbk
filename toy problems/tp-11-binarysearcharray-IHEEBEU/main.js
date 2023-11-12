/**
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 *
 * @function binarySearchArray
 * @param {Array<Any>} array
 * @param {Array<Any>} target
 * @return {Number}
 */

 var index=0
     const  binarySearchArray = function (array, target) {
         if(array.length===1){
            return index
        }
        else if(array[Math.floor(array.length/2)]<=target){
           
            index=index+Math.floor(array.length/2)
    return binarySearchArray(array.splice(0,Math.floor(array.length/2)),target)
        }
        else if(array[Math.floor(array.length/2)]>target){
            
            index=index+Math.floor(array.length/2)
        return binarySearchArray(array.splice(Math.floor(array.length/2),array.length),target)
        }
       
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = binarySearchArray;
// // // // // // // // // //
