/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
    var x=""
    var y=0
  
    for(var i=0;i<string.length;i++){
         
        for(var j=1;j<string.length;j++){
            
           if(string[i]===string[j]){
            y=1
               console.log(y)
           }
        }
        if(y===0){
            x=string[i]
            return x
        }else{
            y=0
        }
    }
}