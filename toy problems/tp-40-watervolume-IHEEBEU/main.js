/*
You are given an array of numbers that each represent the height of an adjoining building. During torrential rain, water collects in the spaces between buildings. What is the maximum amount of water collected by the buildings represented by the array?
Explanation: An input of [3,0,3] can be visualized as such:
 __    __
|  |//|  |
|  |//|  |
|  |//|  |
‾‾‾‾‾‾‾‾‾‾
The area of water in the above picture (and the result of calling volume([3,0,3])) is 3.
An input of [4,0,3,1] can be visualized as such:
 __
|  |   __
|  |//|  |
|  |//|  |   __
|  |//|  |//|  |
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
waterVolume([4,0,3,1])) is 4
Challenge: do this in O(n) with < 2 pass-throughs
*/

/**
 * @function waterVolume
 * @param {Array<Number>} hgts
 * @return {Number}.
 */
function waterVolume(hgts) {
 
    let waterVolume = 0;
  var without0=hgts.filter(e=>e!==0)
  for (var i=0 ; i<without0.length-1; i++){
    
    var x = Math.min(without0[i], without0[i+1])
    waterVolume+=x
  }
    return waterVolume
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = waterVolume; //
// // // // // // // // // //
