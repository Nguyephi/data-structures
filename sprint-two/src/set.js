var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this.storage[item] === undefined) this.storage[item] = true;
};

setPrototype.contains = function(item) {
  var isPresent = false;
  for (var key in this.storage) {
    if (this.storage[key] === true) {
      isPresent = true
    }
  }
  return isPresent;
};

setPrototype.remove = function(item) {
  for (var key in this.storage) {
    if (this.storage[key] === true) {
      var temp = this.storage[key]
      delete this.storage[key]
      return temp;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
