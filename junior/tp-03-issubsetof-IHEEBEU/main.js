/**
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 * @function Array.prototype.isSubsetOf
 * @param {Array} arr - superset array
 * @this {Array} - subset array
 * @return {Boolean} - is subset ?
 */
Array.prototype.isSubsetOf = function (arr) {
  var x=[]
    var y=0
  for (var i=0;i<this.length;i++){
    for(var j=0;j<arr.length;j++){
      if(this[i]===arr[j]){
          x.push(true)}
          //     console.log("this is j",arr[j])
          // console.log("this is i",this[i])}
      else if(this[i]!==arr[j]){
          
        x.push(false) 
           
      }
   
      }
    }
    for(var i=0;i<x.length;i++){if(x[i]===true){y++}}
    if(y===this.length){ return true}
    else{return false}
    
  }
/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
 */
