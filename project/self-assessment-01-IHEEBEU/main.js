//=============================================== 1
//Write a function called percentOf that takes two parameters,
//The function should find out what percentage the first number represents of the second number,
//and returns the result as a string.
//percentOf(5, 10)  ==>  "5 is 50% of 10"
//percentOf(2, 10)  ==>  "2 is 20% of 10"
// Note: please write one or two lines here describing your solution.
function percentOf(num1, num2) {
return num1+" is "+((num1/num2)*100)+"% of "+num2
}

//=============================================== 2

//Write a function called pluralize that:
//takes 2 parameters, a noun and a number.
//returns the number with the noun in pluralized form.
//pluralize('cat', 0)  ==>  "0 cats"
//pluralize('cat', 5)  ==>  "5 cats"
//pluralize('cat', 1)  ==>  "1 cat"
// Note: please write one or two lines here describing your solution.
function pluralize(noun, number) {
 if (number===1){
  return noun
 }
 return noun+"s"
}

//=============================================== 3

//Write a function called isEven that:
//takes 1 parameter, a number.
//returns whether the number is even or odd.
//isEven(0)  ==>  "0 is an even number"
//isEven(9)  ==>  "9 is an odd number"
//isEven(-2)  ==>  "-2 is an even number"
//isEven(56468786548789)  ==>  "56468786548789 is an odd number"
// Note: the output has to be identical to the example
function isEven(nbr) {
  if (nbr%2===0){
    return nbr+" is an even number"
  }
  return nbr+" is an odd number"
}

//=============================================== 4

//Write a function called counter that:
//takes no parameter.
//when invoked, always returns a number that is 3 more than the previous invocation.

//counter()  ==>  3
//counter()  ==>  6
//counter()  ==>  9
// Note: please write one or two lines here describing your solution.
function counter(){
for (var x=3;x%3===0;x=x+1)
    {    return x
    var x
    while (x>0){
        x=x*3
        
    }
        
  }}

// IGNORE THE BELOW CODE
module.exports = { percentOf, pluralize, isEven, counter };
