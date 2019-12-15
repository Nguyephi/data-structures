

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (this.nodes[node] === undefined) {
    this.nodes[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var isPresent = false;
  for (var key in this.nodes) {
    if (key === node || parseInt(key)=== node) {
      isPresent = true;
      break;
    }
  }
  return isPresent;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes[node].length; i++) {
    var toNode = this.nodes[node][i]
    this.removeEdge(node, toNode )
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var isPresent = false;
  for(var i = 0; i < this.nodes[fromNode].length; i++) {
    var currentEdge = this.nodes[fromNode][i];
    if (currentEdge === toNode) isPresent = true;
  }
  return isPresent;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.nodes[fromNode] = this.nodes[fromNode].splice(toNode, 1)
  this.nodes[toNode] = this.nodes[toNode].splice(fromNode, 1)
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
  typeof parseInt(key) === 'number' ? key = parseInt(key) : null;
   cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


