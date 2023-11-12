/**
 * Write a function called agesToMinutes that,
 * accepts an array of object as parameter and
 * return an array of objects after converting the ages from years to minutes
 * using map.
 *
  var people = [{
        name: {
              first: 'Majd',
            middle: 'Eddin',
 *       },
 *       age: 30
 *       }, {
 *       name: {
 *             first: 'Fatima',
 *             last: 'Himmamy'
 *       },
 *       age: 26
 *       }, {
 *       name: {
 *             first: 'Sahar',
 *             middle: 'MHD'
 *       },
 *       age: 27
 *       }, {
 *       name: {
 *             first: 'Nour',
 *             middle: 'Eddin',
 *       },
 *       age: 15
 *       }, {
 *       name: {
 *             first: 'Ahmad',
 *             last: 'Awad'
 *       },
 *       age: 33
 * }];
 *
 * @param {object} object
 * @return {object}
 */
function agesToMinutes(object){


    var acc=array
    console.log(acc)
    return map (acc,function(e,i){
        
        return e.age=e.age*525600
    })
}

// EXTRA Credit: one of the most important notes in coding is that, ( inputs to function should not be modified ) for example
// when you invoke the function above (agesToMinutes) with the array (people), the function should return a new array where ages are converted to minutes, WITHOUT, modifying the people array
// Make sure that the function does not modify the input;
