var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods)
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var isPresent = false
  var checkValue = function (node) {
    if (node.value === target) isPresent = true
    for (var i=0; i < node.children.length; i++) {
      var child = node.children[i];
      if (child.value === target) {
        isPresent = true;
        break;
      };
      checkValue(child);
    }
    return isPresent;
  }
  return checkValue(this)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
