
// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors
var arr=["name of females in your class","name of males in your class","name of your class instructors"]

/**
 * 2-write a function called (midElement) that takes an array as an argument and returns the element that is located in the middle of that array.
 * @param {Array<any>} array
 * @return {any}
 */
function midElement(array) {
    return array[Math.floor((array.length-1)/2)]
    }

/**
 *
 * 3-write a function called (multipleEvenIndexes) that takes an array of numbers, as an argument and returns an array of numbers, multiplied by two for even indexes.
 *
 * @param {Array<number>} array
 * @return {Array<number>}
 */

function multipleEvenIndexes(array) {
    var s=[]
    for (i=0;i<array.length;i=i+2)
    
    s.unshift(array[i]*2)
    return s.reverse()
    }