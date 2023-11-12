     #RBKTN-Kef-01-23-High-Order-functions-Extra-0.2

Write a function SumEvenNumbers that takes an array as a parameter and return the sum of all the even numbers
function SumEvenNumbers(numbers) {

}
var numbers = [1, 2, 3, 4];
SumEvenNumbers(numbers); // => 6  
Write a function SumEvenIndexes, that takes an array as a parameter and return the sum of all the numbers located in even indexes
function SumEvenIndexes(numbers) {
// ...
}
var numbers = [1, 2, 3, 4, 12, 5];
var alsoNumbers = [12, 420, 3, 69];
SumEvenNumbers(numbers); // => 11
SumEvenNumbers(alsoNumbers); // => 489
Create a function strEnding that adds a string ending to each member in an array.
function strEnding(array, char) {
// ...
} 

addEnding(["clever", "meek", "hurried", "nice"], "ly"); //=>["cleverly", "meekly", "hurriedly", "nicely"]
addEnding(["new", "pander", "scoop"], "er"); // => ["newer", "panderer", "scooper"]
addEnding(["bend", "sharpen", "mean"], "ing"); // => ["bending", "sharpening", "meaning"]
Write a function that returns true if there exists at least one number that is larger than or equal to n.
function existsHigher(array, n) {
// ...
}

existsHigher([5, 3, 15, 22, 4], 10); //=> true

existsHigher([1, 2, 3, 4, 5], 8); //=> false

existsHigher([4, 3, 3, 3, 2, 2, 2], 4); //=> true

existsHigher([], 5); //=> false
There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.
Write a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.
function existsHigher(array) {
// ...
}

warOfNumbers([2, 8, 7, 5,8]); // => 2
// 2 + 8 = 10// 2+8+8=18 //7+5=12 =>-6
// 7 + 5 = 12
// 12 is larger than 10
// So we return 12 - 10 = 2

warOfNumbers([12, 90, 75]); // => 27

warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]); // => 168
Write a function that iterate over an array of files and returns an array of their extension names. Hint(not really figure it yourselves)
function getExtension(array) {
// ...
}

getExtension(["code.html", "code.css"]); // => ["html", "css"]

getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]); // => ["jpg", "pdf", "mp3"]
ascii "A"=65 "Z"=90 , "a" 32
getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"]); // => ["rb", "cpp", "py", "js"]
Create a function that takes a string as input and capitalizes a letter if its ASCII code is even and returns its lower case version if its ASCII code is odd. Hint(i'll give you that use "charCodeAt")
function asciiCapitalize(array) {
// ...
}

asciiCapitalize("to be or not to be!"); // => "To Be oR NoT To Be!"

asciiCapitalize("THE LITTLE MERMAID"); // => "THe LiTTLe meRmaiD"

asciiCapitalize("Oh what a beautiful morning."); // => "oH wHaT a BeauTiFuL moRNiNg."
Write a function that reverses all the words in a sentence that start with a particular letter.
function specialReverse(array) {
// ...
}

specialReverse("word searches are super fun", "s"); // =>"word sehcraes are repus fun"
specialReverse("first man to walk on the moon", "m"); // =>"first nam to walk on the noom"
specialReverse("peter piper picked pickled peppers", "p"); // =>"retep repip dekcip delkcip sreppep"
