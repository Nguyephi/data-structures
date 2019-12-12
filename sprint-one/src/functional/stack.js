var Stack = function() {
  var obj = {};

  // Use an object with numeric keys to store values
  obj.storage = {};
  obj.count = 0;

  // Implement the methods below
  obj.push = function(value) {
    obj.storage[obj.count] = value;
    obj.count++
  };

  obj.pop = function() {
    if (obj.count > 0) {
    var val = obj.storage[obj.count - 1]
    obj.count--;
    delete obj.storage[obj.count]
    return val;
    }
  };

  obj.size = function() {
    return obj.count
  };

  return obj;
};


