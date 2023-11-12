/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 * @function toFraction
 * @param {Number} number
 * @return {String}
 */
var toFraction = function (number) {

    for (var i=1;i<=number*2;i++){
  for(var j=1;j<=number;j++){
    if(i/j===number){
      console.log( i.toString()+"/"+j.toString())
    }
  }
}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = toFraction;
// // // // // // // // // //
