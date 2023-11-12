  var getElementsByClassName = function(className, element) {
    var x = element || document
    var y = x.querySelectorAll("." + className)
    return Array.from(y)
   };
