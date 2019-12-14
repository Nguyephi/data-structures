

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get buck
  var bucket = this._storage.get(index);
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }
  var found = false;
  //iterate over bucket
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      //reasign
      tuple[1] = v;
      found = true;
      break;
    }
  }
  if (!found) {
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  if (!bucket) {
    return undefined;
  }

  // iterate over bucket
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }

  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  if (!bucket) {
    return undefined;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      return tuple[1];
    }
  }
  return undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


