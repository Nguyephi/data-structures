var Stack = function() {
   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {}
  };
  _.extend(someInstance, stackMethods);
  return someInstance;
};

stackMethods = {};

var count = 0
stackMethods.push = function (val) {
  count ++
  this.storage[count] = val
}

stackMethods.pop = function() {
  var val = this.storage[count]
  delete this.storage[count]
  count--
  return val
}

stackMethods.size = function () {
  var size = 0, key;
      for (key in this.storage) {
          if (this.storage[key]) size++;
      }
      return size;
}
