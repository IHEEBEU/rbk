function TreeMaker() {
  var tree = Object.create(treeMethods);
  tree.children = [];
  return tree;
}

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = TreeMaker();
  child.value = value;
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  
  return false;
}