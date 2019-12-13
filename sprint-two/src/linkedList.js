var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
    } else {
      var current = list.head
      while (current.next) {
        current = current.next;
      }
      current.next = node
    }
    list.tail = node;
  };

  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next
    return temp
  };

  list.contains = function(target) {
    var isPresent = false;
    var current = list.head;

    while (current !== null) {
      if (current.value === target) {
        isPresent = true;
        break;
      }
      current = current.next;
    }
    return isPresent;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * list.addToTail() is O(n);
 */
