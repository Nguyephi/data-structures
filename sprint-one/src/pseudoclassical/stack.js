var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
  this.count = 0;
};

Stack.prototype.push = function (val) {
  this.storage[this.count] = val;
  this.count++;
}

Stack.prototype.pop = function () {
  if (this.count > 0) {
    this.count--;
    var val = this.storage[this.count];
    delete this.storage[this.count];
    return val;
  }
}

Stack.prototype.size = function () {
  return this.count;
}