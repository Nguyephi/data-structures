class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {}
  this.count = 0;
  }

  enqueue(val) {
    this.storage[this.count] = val
    this.count ++
  }

  dequeue() {
    if (this.count > 0) {
      this.count--;
      var val = this.storage['0']
      var amount = 0;
      for (var key in this.storage) {
        this.storage[key] = this.storage[parseInt(key)+1];
        amount++

      }
      if (amount > this.count) {
        delete this.storage[amount - 1]
      }
      return val;
    }
  }

  size() {
    return this.count;
  }

}
