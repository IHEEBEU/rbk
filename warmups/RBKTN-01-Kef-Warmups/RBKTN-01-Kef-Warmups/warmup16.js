// write a function that takes a string as an argument
// and returns the string reversed word by word
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .
function reversestr(str){
   
    var x=""
    var y=[]
   
     for(var i=0;i<str.length;i++){
          if(str[i]!==" "){
        for(var j=i;j<str.length && str[j]!==" ";j++){
            
             x=x+str[j] 
            i++           
         }
         
         }
         y.unshift(x)
        x=""
        
 }
    for (var s=0;s<y.length;s++){
      x=x+y[s]+" "
    }
    return x
}