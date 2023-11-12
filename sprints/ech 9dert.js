//sprint OOP 
function Toaster() {
    var instance = {};
instance.toast=""
instance.time=0
instance.addToast=addToast
instance.eject=eject
instance.setTimer=setTimer
     return instance;
}
var addToast=function (str){
   return this.toast=str
}
var eject=function (){
   this.toast=""
  return "Bechfe"
}
var setTimer=function (secs){
   if(this.toast===""){
       return "The toaster is empty :("
   }
   else if (this.toast!=="")
   {
setTimeout(()=> {console.log("Ding!, Take your bread Honey")}, secs*1000)
   }
    
}
//sprint OOP 
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
function ages(people) { 
   return map(people, function(person,i) { 
         return person.name.first ;}); 
   }
   //01 sprint map
   function abs(x){
      return map(x,function(e,i){
             if (e>= 0) { 
               return e; 
         } return -e;
          
   })  
      
      }
      //02 sprint map
      function max (array){
         return map(array , function(e,i){
             return Math.max(...e)
         })
     }
     //03 sprint map
     function countNestedKeys(object) { 
      return map(object,function (value,key){
          return object.key=Object.keys(object).length
      }) 
       } 
       //04
       function securityCheck(coll){ 
         return map(coll,function(e,i){
              if(e.user.password.length<8){
                return e[flag]=false
             }else {return e[flag]=true}
             if(e.user.password===e.user.password.toLowerCase()){
               return e[passwordHealth]="weak"}
             else if (e.user.password===e.user.password.toLowerCase()&& e.user.password.includes("1","2","3","4","5","6","7","8","9","0")){}
         })
      } 
   //                            FILTER FUNCTION
      function filter(array, predicate) {
         var acc = [];
         each(array, function(element) {
         if (predicate(element,i)) {
         acc.push(element);
         }
         });
         return acc;
         }
   //                            FILTER FUNCTION
   function filter (coll,predicate){
      var acc = {}
    
         if(Array.isArray(coll)){
    
        acc=  []}
    
             each(coll,function(element,i){
                 if(predicate(element,i)){
                         if(Array.isArray(acc)){
                     acc.push(element)
                         }
                     else{
                         acc[i]=element
                     }
    
                 }
             }) 
             return acc
    
    }
    //                        FILTER FUNCTION 
    //                        REDUCE FUNCTION 
    function reduce(array, f, acc) { 
      if (acc === undefined) { 
            acc = array[0]; 
            array = array.slice(1); 
      } 
      each(array, function(element, i) { 
            acc = f(acc, element, i); 
      }); 
      return acc; 
}
