/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
 *
 *
 *
 * @function longestPalindrome
 * @param {String} string
 * @return {String}
*/
const longestPalindrome = function (string) {
    var possib={}

    for(var i=0 ; i<string.length;i++){
        var check=string[i]
        for(var j=i+1;j<string.length;j++){
           
            check+=string[j]

         var checkrev = check.split('').reverse().join('');
         console.log(checkrev);   
         if(check===checkrev){
                possib[j]=check
            }
        }
    }
    //this object will contain ever combination , we can loop and find the longest 
    return possib
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = longestPalindrome;
// // // // // // // // // //