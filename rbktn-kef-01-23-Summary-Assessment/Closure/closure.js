/**
 * Complete the function `makeIncrementer`.
 *
 * It accepts a number as its only argument, `num` and returns a function that,
 * when invoked, should increment `num` by 1 and return the new `num` value.
 * Your function will be tested by passing in a single integer as the only argument.
 *
 * var incrementer = makeIncrementer(4);
 *
 * incrementer() // -> 5
 * incrementer() // -> 6
 * incrementer() // -> 7
 */

var makeIncrementer = function(num) {
  var x=num
function addone(){
  x=x+1
    return x
}
return addone
};


/**
 * Complete the function `makeSentence`.
 *
 * It accepts a word as its only argument, `sentence` and returns a function that,
 * when invoked, should add to `sentence` the word passed in and return the new `sentence` value.
 * If nothing is passed in, it just returns the current sentence
 *
 * var sentenceOne = makeSentence('First');
 *
 * sentenceOne('next') // -> 'First next'
 * sentenceOne('another') // -> 'First next another'
 * sentenceOne() // -> 'First next another'
 */

var makeSentence = function(sentence) {
  var str=sentence
  function addstr(strr){
    if (strr){
    str=str+" "+strr
      return str
  }else {
        return str
  }
      
}

  return addstr

}