function each(coll, f) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                f(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                f(coll[key], key); 
          } 
    } 
 }
 function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
 }
 function filter(coll, predicate) {
    var acc = [];
       if (!Array.isArray(coll)) {
             acc = {};
    }
    each(coll, function(element, key) {
        if (predicate(element,key)) {
            acc[key] = predicate(element, key) ;
    }
    });
    return acc; 
    }
 //01
function SumEvenNumbers(numbers) {
    var x=0
    each (numbers,function (e,i){
  if(e%2===0){
    x=x+e
  }
})
return x
}
//02
function SumEvenIndexes(numbers) {
    var x=0
    each (numbers,function (e,i){
  if(i%2===0){
    x=x+e
  }
})
return x
}
//03["iheblove u","moelove u","alouilove u","amenilove u","houssemlove u"],"love u"
function strEnding(array, char) {
   return map(array,function (e,i){
    return e+char
   })
    }
//04[1,2,3,4,5],2
function existsHigher(array, n) {
   var x=false
    each (array,function (e,i){
    if(e>=n){
        x=true
    }

    
   })
   return x
    }
//05
function warOfNumbers(array){
    var x=0
        y=0
    each (array,function (e,i){
        if(e%2===0){
            x=x+e
        }else{y=y+e} 
    }
    )
    return Math.abs(x-y)
}
//06
// Method 1
//function getExtension(array) {
  //  return filter (array,function (e,i){
    //return e=e.split('.')[1]
    //})
    //}
//    Method 2
    function gtg(array) {
        return map(array, function (e,i) {
            return e.split('.').pop()
        })
    }
//07
function ascii(str) {
    var x=""
    for (i=0;i<str.length;i++){
        if (str[i].charCodeAt() %2 === 0){
            x=x+str[i].toUpperCase()
        }else{
            x=x+str[i].toLowerCase()
        }
    }
    return x
  }
//08
function egleb(str,n){
    var x
     var z
     if (str.includes(n)){ 
     x=str.split(' ') 
    for (var i=0;i<x.length;i++){
        if (x[i].includes(n)){
            console.log(x[i])
            z=x[i].length
            for (var j=x[i].length-1;j>=0;j--){
                x[i]=x[i]+x[i][j]
            }
            x[i]=x[i].substr(z)
        }
    } return x.join(" ")
    }
       else {return str}
    }
  

