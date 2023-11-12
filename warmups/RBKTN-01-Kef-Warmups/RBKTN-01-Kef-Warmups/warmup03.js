/**
 * 1 Write a function named helloWorld that:
 * takes 1 argument, a language code (e.g. "fr", "es", "en")
 * returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
 * ex: helloWorld('fr') ==> 'Bonjour tout le monde'
 *    helloWorld('es') ==> 'Hola, Mundo'
 *    helloWorld('') ==> 'Hello, World'
 *
 * @function helloWorld
 * @param {string} str
 * @return {string}
 */
function helloWorld(str){
if (str==="fr"){
    return "Bonjour tout le monde"
}
else if (str==="es"){
    return "Hola, Mundo"
}
else {
    return "Hello, World"
}
}

/**
 * 2 Write a function called laugh() that takes one parameter,
 * num that represents the number of "ha"s to return.
 * laugh(6); => "hahahahahaha"
 *
 * @function laugh
 * @param {number} n
 * @return {string}
 */
 function laugh(n) {
    var ch=""
        i=0
    while (i<n){
        ch=ch+"ha"
        i=i+1
    }
    return ch
}