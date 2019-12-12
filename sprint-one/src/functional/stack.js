var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 0;
  someInstance.push = function(value) {
    count++
    storage[count] = value;
  };

  someInstance.pop = function() {
    var val = storage[count]
    delete storage[count]
    count--;
    return val;
  };

  someInstance.size = function() {
    var size = 0, key;
      for (key in storage) {
          if (storage[key]) size++;
      }
      return size;
  };
  return someInstance;
};
