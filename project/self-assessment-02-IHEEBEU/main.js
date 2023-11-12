// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

// write a function called addOne that takes an array of numbers as an input,
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]

// Note: please write one or two lines here describing your solution.
function addOne(array) {
  var x=0
      arr=[]
  while (x<array.length){
  arr.unshift(array[x]+1)
  x++
  }
  return arr.reverse()
  }

//=======================================================================
/*                                  Q2                                  */
//=======================================================================

// Take an array and remove every second element out of that array.
// Always keep the first element and start removing with the next element.
// Example:
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
// removeEveryOther( myArr ) ==> ['Keep', 'Keep', 'Keep']
// None of the arrays will be empty, so you don't have to worry about that!
// Use a for loop to implement this Exercise

// Note: please write one or two lines here describing your solution.
function removeEveryOther(array) {
  var arr=[]
 for (var i=0;i<=array.length;i=i+2){
 arr.unshift(array[i])
}
return arr.reverse()
}

//=======================================================================
/*                                  Q3                                 */
//=======================================================================

//Using recursion Write a JavaScript function called (greatestCommonDivisor) to find the greatest common divisor (gcd) of two positive numbers.
//Take into account handling when one of the inputs is not a number.

// Note: please write one or two lines here describing your solution.
function greatestCommonDivisor(num1, num2) {

}

//=======================================================================
/*                                  Q4                                 */
//=======================================================================

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Note: please write one or two lines here describing your solution.
function squareSum(numbers) {

  for (i=0;i<=numbers.length;i++){
    var x=0
   x=x+numbers[i]*numbers[i]
}
return x
}

//=======================================================================
/*                                  Q5                                 */
//=======================================================================

// * While loop and For loop are not ALLOWED in this question *

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not.

// With strings you will need to account for case.

// check( [1,2,3,4], 3) ==> true
// check( [1,2,3,4], 5) ==> false
// check( ["a","b","c"], "b") ==> true
// check( ["a","b","c"], "d") ==> false
// check( ["a","b","c"], "C") ==> false

// Note: please write one or two lines here describing your solution.
function check(a, x) {
 if (a[a.length-1]!===x ){
  return "false"
 }
 else if(){
  
  retur "true"
 }
//  ill call the function itself need a bit of time
}

module.exports = {
  addOne,
  removeEveryOther,
  greatestCommonDivisor,
  squareSum,
  check,
};
