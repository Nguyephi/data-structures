var Queue = function() {
  var obj = {};

  // Use an object with numeric keys to store values
  obj.storage = {};
  obj.count = 0;

  // Implement the methods below
  obj.enqueue = function(value) {
    obj.storage[obj.count] = value;
    obj.count++
  };


  obj.dequeue = function() {
    if (obj.count > 0) {
    obj.count--;
    var val = obj.storage['0']
    var amount = 0;
    for (var key in obj.storage) {
      obj.storage[key] = obj.storage[parseInt(key)+1];
      amount++

    }
    if (amount > obj.count) {
      delete obj.storage[amount - 1]
    }
    return val;
  }
  };

  obj.size = function() {
    return obj.count;
  };

  return obj;
}
