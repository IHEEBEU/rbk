/**
 *
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 * Should return null or empty string of there is no commonCharacters
 *
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  var x=""
  for(var i=0; i<string1;i++){
    if(string1[i]===" "){i++}
    for(var j=0;j<string2;j++){
      if(string[i]===string[j]){
        x=x+string[i]
      }
    }
  }
  return x
};
