// 1 - Write functions larger and smaller that each accept two strings as arguments, and return the larger and smaller strings, respectively
function larger(str1,str2){
   if  (str1.length>str2.length){
        return str1+" "+str2
   }
return str2+" "+str1
}

// 2 - Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation. For instance:
function counting(n) {
for ( var i=1 ; i<n+1;i=i+1){
    console.log(i)
}
}
// counting(5); // => '1, 2, 3, 4, 5'
// counting(1); // => '1'
// counting(3); // => '1, 2, 3'

// 3 -  Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5
// welcome 1
//  welcome 2, meet 1
//  welcome 3, meet 1 and 2
//  welcome 4, meet 1, 2 and 3
//  welcome 5, meet 1, 2, 3 and 4
//
function meetgreet(n){
    var x=0
    while (x<n){
    x++    
     console.log  ("Welcome "+" "+x+"meet")   
    for (var i=1 ; i<n;i++)

       console.log  ( i)

}
}

// 4- Write a function shortestWord that works like longestWord, but returns the shortest word instead.
function shortestword(str1,str2){
    
}