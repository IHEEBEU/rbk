//STARTING FUCNTIONS
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

 /// THE WORK ITSELF
function cube(n){
  return n**3
}
function sum(n){
    var x=0
   if (n===0){
        return x}
    else{ 
        return x=n+sum(n-1)}
}
function product(n){
    var x=1
      if (n===0){
        return x}
    else{ 
        return x=n*product(n-1)}
  
}
function Math(callback, array) {
    var x=0
    for (var i=0;i<array.length;i++){
      callback(array[i])
    }
}//???????????
function sayHello() {
    return 'hello'
}
function country(countries) {
    for(var i=0;i<countries.length;i++){
      console.log(countries[i])
    }
}
function countriesToUpperCase(countries){
    for(var i=0;i<countries.length;i++){
  countries[i]=countries[i].toUpperCase()
    }
    return countries
}function countries(){}

function FirstThreeLetters(countries) {
return map(countries,function(e,i){
    return countries=e.slice(0,3)
})
}
function countriesContainingLand(countries){
return filter(countries,function predicate(e,i){
        return e.includes("land")
})
}
function countriesEndsByia(countries){
    return filter(countries,function predicate(e,i){
        console.log(e)
        return e[e.length-2]==="i"&& e[e.length-1]==="a"
})
}
function countriesHaveFiveLetters(countries){
    return filter(countries,function predicate(e,i){
        return e.length===5
    })
}
function scoresGreaterEighty(scores){
    var x
    return filter(scores,function predicate(e,i){
        
        return e.score>80
    })
}
function mostSpokenLanguages(array,n){
    
    return reduce(array,function predicate(acc,e,i){
    if(n>i){
     acc.push(e)
}
return acc},[])
}
function mostPopulatedCountries(array,n){
    return reduce(array,function (acc,e,i){
        if(n>i){
            acc.push(e)
        }
        return acc
    },[])
}

function robotMethod(conversations){
    var obj={}
    var robot;
      var counter=0
    var conv
    obj.sayHi=function( str ){
      // YOUR CODE HERE 
        if(str){
            clearInterval(robot)
            if(counter>10){
                return "yrawa7"
            }
       else{
           return "za4rtou 3lih "
        }    
        }
                robot=setInterval(function(){
                console.log('Hello Freind '+counter++)
            },3000) 
    }
    obj.startconversation=function (){
        var x =Math.ceil(Math.random()*conversations.length-1)
        var y="Robot :"+conversations[x].Robot 
        var z="You :"+conversations[x].You
        conv=y+" "+z
        console.log(y)
        console.log(z)
        return; 
    }
    obj.showall=function(){
return conv
    }
    return obj
}
var conversations=[{Robot:'How are you?',You:"i'm fine thanks"},{Robot:'How old are you',You:"oops this is private sorry "},{Robot:'Where do you live?',You:"In Earth"},{Robot:'How old are you',You:"oops this is private sorry "},{Robot:'Do you have plans for today ',You:"I have to finish the Extra revision Before monday "}]   