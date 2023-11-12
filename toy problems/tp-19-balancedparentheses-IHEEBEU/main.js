/**
 * Balanced Parenthesis
 * Given a string, return true if it contains balanced parentheses ().
 * isBalanced("(x + y) - (4)")	// true
 * isBalanced("(((10 ) ()) ((?)(:)))")	// true
 * isBalanced("(50)(")	// false
 * isBalanced("") //	true
 *
 * @function isBalanced
 * @param {String} str
 * @return {Boolean}
*/
const isBalanced = function (str) {
    var isIt=false
    var parentheses=[]
    for (var i=1;i<str.length;i++){
        if(str[i]==="(" || str[i]===")"){
            parentheses.push(str[i])
        }
        
    }
    console.log(parentheses)
    if(parentheses.length%2!==0){
    return isIt
    }else{ return!isIt}
    
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = isBalanced;
// // // // // // // // // //