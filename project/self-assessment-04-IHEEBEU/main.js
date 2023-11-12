/*****************************  1  ***********************/
// Write a JavaScript program to check whether the last digit 
// of the three given positive integers is same.
// lastDigit(23, 2563, 1254823) => true
// lastDigit(293, 3568, 29) => false
function lastDigit(num1, num2, num3) {
 
  var x=[num1.toString(),num2.toString(),num3.toString()]
var c=x[0][x[0].length-1]

    console.log(c)
 return reduce(x,function(acc,e,i){

  
  if (c!==e[e.length-1]){
  acc=false
}
return acc
 },true)
 
}

/*****************************  2  ***********************/
// Using a for loop THEN a while loop THEN recursion
// Write a JavaScript function that will iterate from n to 0. For each iteration,
// it will check if the current number is odd or even, and display a message to the screen.
// iterateAndLog(3); =>
// Sample Output :
// "2 is even"
// "1 is odd"
// "0 is even"

function reverseIterateAndLogWithFor(n) {
var x=[]
  for (var j=n;j>=0;j--){
  x.push(j)
  for(var i=0;i<x.length;i++){

if(x[i]%2===0){
  return i+"even"}
else{
  return i+"odd"}
 }
}}



function reverseIterateAndLogRecursively(n) {
 if(n===0){
  return " "+0+"is even"
 }
  else if (n%2===0){
return " "+n+"is even"+reverseIterateAndLogRecursively(n-1)
 }
 else  {return " "+n+"is odd"+reverseIterateAndLogRecursively(n-1)}

}

/*****************************  3  ***********************/

// write a Tv class that has the the following properties :
// channelNumber ==> the is number of the current channel on the screen defaults to 0
// and these methods :
// watch ==> takes no params and displays a message of the curent channel number
// changeChannel ==> take a channelNumber (number) and switches the channel to that number
// var myTv = Tv()
// myTv.channelNumber //=> 0 (it starts with channel 0 in the beginning)
// myTv.watch() //=> "you are now watching channel #0"
// myTv.changeChannel(5) //=> "switched to channel #5"
// myTv.channelNumber //=> 5
// myTv.watch() //=> "you are now watching channel #5"
function Tv() {
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

}


