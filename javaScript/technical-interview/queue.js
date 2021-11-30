var inputStack = [];
var outputStack = [];

// For enqueue, just push the item into the first stack
function enqueue(stackInput, item) {
  stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
  stackOutput.push(stackInput.shift());
}
