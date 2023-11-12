/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
    var x=""
    for(var i=0;i<string.length;i++){
        for(var j=1;j<string.length;j++){
            if(string[i]===string[j]){
                console.log("this is i",string[i])
                
             string=string.replaceAll(string[i],"")
                    console.log("this is string",string)
                
                
            }
        }
    }
    return string[0]
};