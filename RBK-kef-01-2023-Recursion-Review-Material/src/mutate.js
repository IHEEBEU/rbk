
function arrayToObjec(array){
   var obj={}
   for(var i=0;i<array.length;i++){
    //[a,b,c,d,e,f,[1,2,[1],3]]
   if(!Array.isArray(array[i])){
           obj[i]=array[i]
       }
      else{
         obj[i]=arrayToObjec(array[i])
      }
   }
   return obj
}

// const objectToArray = function (obj) {
//  var arr1=[]

//    for(var key in obj){
//       if(typeof(obj[key])==="object"){
//          objectToArray(obj[key])
//       }
//       else{
//       var arr=[]
//       arr.push(key,obj[key])
//       arr1.push(arr)
//       }
   
//     }
//  return arr1
// };
const objectToArray = function (obj) {
   var arr = [];
         for (var key in obj) {

     if (typeof obj[key]!=="object") {
      //  arr.push([key,obj[key]]);
       if(Number.isInteger(parseInt(key))){
       arr.push([Number(key),obj[key]]);
       }
       else{
       arr.push([key,obj[key]]);
       }
     } 
        //{a:4,b:5,c:2,d:1,e:3,f:0,g:{a:1}}
     //if the obj[key] is an object itself
     else {
       if(Number.isInteger(parseInt(key))){
           arr.push([Number(key),objectToArray(obj[key])])
       }
       else{
           arr.push([key,objectToArray(obj[key])])

       }
   // arr.push (objectToArray(obj[key]))
   }

}
return arr;
}

const mutate = function (obj) {
   if(Array.isArray(obj)){
      return arrayToObjec(obj)
   } return objectToArray(obj)
}