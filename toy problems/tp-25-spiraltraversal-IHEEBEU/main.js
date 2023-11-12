/**
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
 *    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 *
 *
 * @function spiralTraversal
 * @param {Array<String>} matrix
 * @return {Array}
 */

    const spiralTraversal = function(matrix) {

        // TODO: Implement me!
        //we have to loop over the first array ,put it in an array then we take the last column and we take the last elements 
        //of each array , and then the last row ,then from down to up -1 , then right ... each one we push its element in that array 
        toprow=0
        bottom=matrix.length-1
        right=matrix[0].length-1
        left=0
      };
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //ignore the below code // //
      module.exports = spiralTraversal;
      // // // // // // // // // //
      