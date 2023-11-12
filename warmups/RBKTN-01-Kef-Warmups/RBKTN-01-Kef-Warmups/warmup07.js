/**
 * 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
 * objKey({name:'ahmed',age:20}) ==> ['name','age']
 */
function objKey(object){
    var arr=[]
    for (var key in object){
    arr.push(object.keys)
    
    }
    return arr
}

/**
 * 2 - Write a function named objLength to get the length of a JavaScript object
 * objLength({name:'ahmed',age:20}) ==> 2
 */
function objLength (obj){
    
        var arr=[]
        for (var key in obj){
        arr.push(obj.keys)
        
        }
        return arr.length
    }


/**
 * 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
 * objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function objsort (array){
    var j=0
    var arr=[]
for(var i=1;i<array.length;i++){
    
    if (array[i-1].id===j){
        arr.push(array[j])
    }else {j++}
}return arr
}

// // // // // // // // // // // // // // //
