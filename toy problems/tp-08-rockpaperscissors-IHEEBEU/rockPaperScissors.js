/**
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
* @function rockPaperScissors
* @param {Number} rounds - number of throws
* @return {Array<string>}
*/

var rockPaperScissors = function (rounds) {
    var rounds = rounds || 3;
    var possibilities=[]
    var choices=["R","P","S"]
    // if(rounds===0){return possibilities}
    // else{
       
        for (var i=0;i<5;i++){
            possibilities.push([])
         for (var j=0;j<choices.length;j++){

         }
        // rockPaperScissors(rounds-1)
    // }
}
return possibilities
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = rockPaperScissors;
// // // // // // // // // //