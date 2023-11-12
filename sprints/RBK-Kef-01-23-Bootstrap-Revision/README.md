# RBKTN-06-W4-Extra

# Press Ctrl+Shift+V to preview your README file


## Basic Requirements
#### 1-create function called cube 
```js
function cube(n){
  return n**3
}
```
### 2-create function called sum 
```js
function sum(n){
  var x=0
 if (n===0){
      return x}
  else{ 
      return x=n+sum(n-1)}
}
```
### 3-create function called product
```js
function product(n){
  var x=1
    if (n===0){
      return x}
  else{ 
      return x=n*product(n-1)}

}
```
### 4-create function called Math that takes cube or sum or product as a callback
```js
function Math(callback, array) {
  var x=0
  for (var i=0;i<array.length;i++){
    callback(array[i])
  }
}
Example:Math(sum,[1,2,3]) ==> 6
```
### 5-write a function sayHello in objective to return hello each time you invoke the function
```js
function sayHello() {
  return 'hello'
}
Example: sayHello() ==> 'Hello'
```
### 6-Using each create a function that iterate into an array of countries.you have to show each country 
```js var countries =[
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

function country(countries) {
  for(var i=0;i<countries.length;i++){
    console.log(countries[i])
  }
}

```
### 7-Using map create a function called countriesToUpperCase that takes an array of country names and returns an array of country names with the first character of each country to upperCase
```js
var  countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
function countriesToUpperCase(countries){
  for(var i=0;i<countries.length;i++){
countries[i]=countries[i].toUpperCase()
  }
  return countries
} 
countriesToUpperCase(countries) ==> ['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND','JAPAN','KENYA']
```
### 8-Using map create function called countriesFirstThreeLetters that takes one parameter and returns an array of country names with only the first three letters
```js
 var  countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

countriesFirstThreeLetters(countries) ==> ["ALB", "BOL", "CAN", "DEN", "ETH", "FIN", "GER", "HUN", "IRE", "JAP", "KEN"]
```
### 9-Using filter create function called countriesContainingLand that takes one parameter and returns only the countries that contains 'land' in their names
```js
 var  countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
countriesContainingLand(countries) ==> ['Finland', 'Ireland']

```
###  10-Using filter create function called countriesEndsByia that takes one parameter and returns only the countries that contains 'ia' in their names
```js
countriesEndsByia(countries) ==> ['Albania', 'Bolivia','Ethiopia']
```
###  11-Using filter create function called countriesHaveFiveLetters that takes one parameter and returns only the countries that they have five letters in their names
```js
countriesHaveFiveLetters(countries) ==> ['Japan', 'Kenya']
```
###  12-Using filter write function called scoresGreaterEighty that returns names that have score greater then eighty
```js
var scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]
scoresGreaterEighty(scores)==>[{name: 'Asabeneh', score: 95}, { name: 'Lidiya', score: 98 },{name: 'Martha', score: 85},{name: 'John', score: 100}]
```
### 13-Create a function called mostSpokenLanguages to find you the n times most spoken languages
```js
var languages=[
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
]
mostSpokenLanguages(languages,3) ==>[{country: 'English',count: 91},{country: 'French',count: 45},{country: 'Arabic',count: 25}]
mostSpokenLanguages(languages,4) ==>[{country: 'English',count: 91},{country: 'French',count: 45},{country: 'Arabic',count: 25},{country: 'Spanish',count:24}]
```
### 14-Create a function called mostPopulatedCountries which create the n times most populated countries
```js
var population = [
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000},
{country: 'Indonesia', population: 258705000},
{country: 'Brazil', population: 206135893},
{country: 'Pakistan', population: 194125062},
{country: 'Nigeria', population: 186988000},
{country: 'Bangladesh', population: 161006790},
{country: 'Russian Federation', population: 146599183},
{country: 'Japan', population: 126960000}
]
mostPopulatedCountries(population,3) ==>[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000}
]
```
## More Practice
### 1-Let's Imagine that you are talking with a robot and this robot will keep telling you Hello until you answer him 
### Invoke the function and solve it according to the concept of your robot
```js
function robotMethod(){
    var obj={}
    var robot;
    
    obj.sayHi=function( /* YOUR CODE HERE */ ){
      // YOUR CODE HERE  
        var counter=0
            robot=setInterval(function(){
                console.log('Hello Freind '+counter++)
            },3000)
      // YOUR CODE HERE  
      
    }
    
    return obj
}
Example :
var robot=robotMethod()
robot.sayHi() ==>Hello Freind 1 
               Hello Freind 2
               Hello Freind 3
               Hello Freind 4
robot.sayHi('Hi')=> 'Thank you for answering me'
```
### 2-Let's update your robot method that if you answer him afer 10 times of saying Hi he will respond to you 'nope i don't want to be your freind you are too late 'else then that he will answer you 'yey let's Be freinds'
```js

Example 1 :
var robot=robotMethod()
robot.sayHi() ==> Hello Freind 1 
               Hello Freind 2
               Hello Freind 3
               Hello Freind 5
               Hello Freind 6
               Hello Freind 7
               Hello Freind 8
               Hello Freind 9
               Hello Freind 10
               Hello Freind 11
               Hello Freind 12
                     
robot.sayHi('Hi')=> "nope i don't want to be your freind you are too late "
Example 2 :
var robot=robotMethod()
robot.sayHi('Hi') ==> Hello Freind 1 
               Hello Freind 2
               Hello Freind 3
               Hello Freind 4

robot.sayHi('Hi') ==> "Yey let's Be freinds"
```
### 3-Great Job now let's start conversation with your robot 
### Imagine that you have an object of conversarions and each time you start conv it will pick for you a random one and it will be shown in the console 

```js
Example:
var conversations=[{Robot:'How are you?',You:"i'm fine thanks"},{Robot:'How old are you',You:"oops this is private sorry "},{Robot:'Where do you live?',You:"In Earth"},{Robot:'How old are you',You:"oops this is private sorry "},{Robot:'Do you have plans for today ',You:"I have to finish the Extra revision Before monday "}]

var robot=robotMethod(conversations)
robot.startConversation()=> 'Robot: How are you?'
                            'You: i"m fine thanks'
robot.startConversation()=> 'Robot: Where do you live?'
                            'You: In Earth'
```
### 4-Perfect now what if you want to see all of your conversations with this robot
### Create a methot that will show you all the coversations that you did randomly 

```js
Example:
var robot=robotMethod(conversations)
robot.showAll()=> {Robot:'How are you?',You:"i'm fine thanks"} 
                  {Robot:'Where do you live?',You:"In Earth"}
```
## Advanced
# Challange
### 1-Develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
```js
var  ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
var statistics=stat(ages)
statistics.count()  ==>  25
statistics.sum()    ==>  744
statistics.min()    ==>  24
statistics.max()    ==>  38
statistics.range()  ==>  14
statistics.mean()   ==>  30
statistics.median() ==>  29
statistics.mode()   ==>  {'mode': 26, 'count': 5}
statistics.Variance()  ==> 17.5
 statistics.StandardDeviation()  ==>  4.2

statistics.describe()  ==>
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
```