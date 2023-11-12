// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

/**
 * 1- Using recursion Write a JavaScript function called (greatestCommonDivisor) to find the greatest common divisor (gcd) of two positive numbers.
 * Take into account handling when one of the inputs is not a number
 *
 * @param {number} num1
 * @param {number} num2
 * @return {boolean|number}
 */
function greatestCommonDivisor(num1, num2){
var x=0
    for (i=0;i<num1||i<num2;i++){
if (num1%i===0&&num2%i===0){
    x.push(i)   
}
}return x[x.length-1]
}

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************





/**
 * 2-Write a function called (sum) that accepts two numbers as parameters, 
 * and sum them together but without summing them together directly
 * you can only add one at each summation, you'll need to use recursion in this.
 *
 *
 *
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function sum(x,y){
   
    for (var i=0;x!==0;x--){
        y++
        
    }return y
}

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************
