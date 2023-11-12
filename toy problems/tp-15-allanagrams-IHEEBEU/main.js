/**
 * 
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().* 
 * 
 * 
 * example usage:
 * var anagrams = allAnagrams('abc');  
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 *
 * @function allAnagrams
 * @param {String} string
 * @return {Array<String>}
 */

  
  var allAnagrams = function(string) {

    function findAnagrams(start, str) {
      if (str.length === 1) {
        return [ str];
      } else {
        var results = [];
        for (var i = 0; i < str.length; i++) {
          var anagram = findAnagrams(str[i],replaceWith("").string);
          for (var j = 0; j < anagram.length; j++) {
            results.push( anagram[j]);
          }
        }
  
        return results;
      }
    }
  
    return findAnagrams(string);
  }
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //ignore the below code // //
  module.exports = allAnagrams;
  // // // // // // // // // //