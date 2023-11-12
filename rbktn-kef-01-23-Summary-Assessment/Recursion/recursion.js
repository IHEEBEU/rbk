function sumBetween(start, end) {
 var start=start
  end=end
  x=0
  if(start>end){
    start=end
    end=start
  }
  if(start===end){
    return x
  }else{
    x=x+start+sumBetween(start+1,end)
  }
  

}

var x=""
    function joinRecursion(arr) {

    if(arr.length===0){
        return x
    }
x=x+arr[0]
    console.log(x)
arr.splice(0,1)
return joinRecursion(arr)
}

// OPTION 1

var getStringValues = function (object) {
  // YOUR CODE HERE
};

var sumNumericValues = function (object) {
  // YOUR CODE HERE
};

// OPTION 2

var y=[]
    function any(arr){
       var z=arr
    var x=arr[arr.length-1]
    
    if (arr.length===0){return y}
    if (!Array.isArray(x)){
        y.unshift(x)
        console.log(y)
        arr.pop()
        return any(z)
    }
        else{
            
         return  any(x)  
        }
}