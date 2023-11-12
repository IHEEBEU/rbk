/**
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 * @function characterFrequency
 * @param {String} string - input string
 * @return {Array<Array<String, Number>>} - matrix that contains each latter and its frequency
 */
const characterFrequency = function (string) {
    var arr=[]
      var str=string
      for (var i=0;i<str.length;i++){
          var count=0
       for(var j=0;j<str.length;j++){
           if(str[i]===str[j]){
               count++
           }
       }
          arr.push([str[i],count])
          str=str.replaceAll(str[i],"") 
      }
     
      return arr
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = characterFrequency;
// // // // // // // // // //
