var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
 // but try not not reference your old code in writing the new style.
 var someInstance = {};
 someInstance.storage = {};
 someInstance.count = 0;
 _.extend(someInstance, stackMethods);
 return someInstance;
};

stackMethods = {};

stackMethods.push = function (val) {
 this.storage[this.count] = val
 this.count ++
}

stackMethods.pop = function() {
 if (this.count > 0) {
  this.count--
 var val = this.storage[this.count]
 delete this.storage[this.count]
 return val
 }
}

stackMethods.size = function () {
 return this.count;
}
