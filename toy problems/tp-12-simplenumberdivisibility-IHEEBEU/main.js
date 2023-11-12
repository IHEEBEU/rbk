/**
 * you will be given a number and your task will be to rearrange the number so that it is divisible by 25, but without leading zeros.
 * Return the minimum number of digit moves that are needed to make this possible. If impossible, return -1 ( Nothing in Haskell ).
 *
 * For example:
 *
 * solve(521) = 3 because:
 * a) Move the digit '1' to the front: 521 -> 512 -> 152. The digit '1' is moved two times.
 * b) Move '5' to the end: 152 -> 125. The digit '5' is moved one time, so total movement = 3.
 * Of all the ways to accomplish this, the least digit moves = 3.
 *
 *
 * solve(100) = 0. Number already divisible by 25.
 * solve(1) = -1. Not possible to make number divisible by 25.
 * solve(0) is not tested.
 *
 * @function solve
 * @param {Number} n
 * @return {Number}
 752*/
var count=0
const solve = (n) => {
var nToArray=n.toString().split("")
var size=nToArray.length

if((nToArray[size-1]==='5'&&nToArray[size-2]==='2')||(nToArray[size-1]==='0'&&nToArray[size-2]==='5')||(nToArray[size-1]==='0'&&nToArray[size-2]==='0')){
return count
}else{
   
        var tompo=""
        tompo=nToArray[Math.floor(Math.random() * size)]
        nToArray.splice(Math.floor(Math.random() * size),1,tompo)
        count++
        nToArray=parseInt(nToArray.join(""))
return solve(n)
}
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = solve;
// // // // // // // // // //