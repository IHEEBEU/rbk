//========================================================== 1
// write a Tv class that has the the following properties :
// channelNumber ==> the is number of the current channel on the screen defaults to 0
// and these methods :
// watch ==> takes no params and displays a message of the curent channel number
// changeChannel ==> take a channelNumber (number) and switches the channel to that number
// var myTv = Tv()
// myTv.channelNumber //=> 0 (it starts with channel 0 in the beginning)
// myTv.watch() //=> "you are now watching channel #0"
// myTv.changeChannel(5) //=>  "switched to channel #5"
// myTv.channelNumber //=> 5
// myTv.watch() //=> "you are now watching channel #5"


  function tv() {
    var instance={}
    x=0
    instance.channelNumber=channelNumber
    instance.watch=watch
    instance.changeChannel=changeChannel
    return instance
}
var channelNumber =function(){
    return this.x
}
var watch=function(){
    return "you are now watching channel#"+this.x
}
var changeChannel=function(num){
    this.x=num
    return "switched to channel#"+num
}


//=========================================================== 2
//Write a function called makeCounter that:
//takes 2 parameters, 2 numbers an initial value and a step.
//when invoked, always returns a number that is more than the previous invocation with the specified step.

// var counter = makeCounter(0,1)
//counter()  ==>  0
//counter()  ==>  1
//counter()  ==>  2
//counter()  ==>  3

// var countBy2 = makeCounter(4,2)
//countBy2()  ==>  6
//countBy2()  ==>  8
//countBy2()  ==>  10
//countBy2()  ==>  12

// Note: please write one or two lines here describing your solution.
var x=0
function makeCounter(ini,step) {
 
 for (var i=0; i<1;i++){
 x=x+step
 } return x
}

//=========================================================== 3
//I have a bucket of sloths. Each sloth is special and has a long name.
// Below is an array called bucketOfSloths, containing all the information about my sloths.
var bucketOfSloths = [
  { name: { first: "Furry", middle: "Danger", last: "Assassin" }, age: 2 },
  { name: { first: "Slow", last: "Pumpkin" }, age: 3 },
  { name: { first: "Bullet", middle: "Proof", last: "Sloth" }, age: 4 },
  { name: { first: "Boos", middle: "Boos", last: "Bun" }, age: 5 },
  { name: { first: "Jungle", last: "Fuzz" }, age: 2 },
];

// a- write a function fullName that takes index number and array as input and return the full name as string
// fullName(bucketOfSloths,0) //==> "Furry Danger Assassin"

function fullName(array, index) {
 var str=""
 //for(var i=0;i<array.length;i++)

 str=str+Object.values(bucketOfSloths[index].name)//[i]
 +" "
return str
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

 function longestName(bucketOfSloths) {
  var str=""
  strakber=""
  for(var i=0;i<this.bucketOfSloths.length;i++){
 
  str=str+Object.values(this.bucketOfSloths[i].name)
  +" "
  if(str.length>strakber.length){
    strakber=str
  }}
 return strakber
 }

//=========================================================== 4
//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
// You should check the type of the input and return 'Invalid input' if it's not a string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0

// Note: please write one or two lines here describing your solution.
function countVowels(string) {
  // TODO: your code here
}

//Good Luck :))
module.exports = {
  Tv,
  makeCounter,
  fullName,
  longestName,
  countVowels,
};
