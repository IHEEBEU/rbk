/**
 * Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
 * For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
 *              capitalize("azerty") = ['AzErTy','aZeRtY']
 * The input will be a lowercase string with no spaces.
 * Good luck!
 *
 * @param {string} str
 * @return {string[]}
 */
function capitalize(str) {
    var x=["",""]
        
        for (var i =0;i<str.length;i++){
    if (i%2===0){
    x[0]=x[0]+str[i].toUpperCase()
    x[1]=x[1]+str[i]
    }else{
        x[0]=x[0]+str[i]
        x[1]=x[1]+str[i].toUpperCase()
    }
    }return x
    }