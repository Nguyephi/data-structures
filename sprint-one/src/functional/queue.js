var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
var count = 0;
  someInstance.enqueue = function(value) {
    count++
    storage[count] = value;
  };

var index = 0
  someInstance.dequeue = function() {
    index++;
    var val = storage[index]
    delete storage[index];
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