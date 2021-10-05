//Given an array of ints with a length of 3, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.

/////////BUILT IN METHOD///////
function reverse3(arr) {
  return arr.reverse();
}


//////////////////////////////
function reverse3(arr) {
  let reversed = [];
  for (i = 0; i < arr.length; i++) { 
  reversed.push(arr[arr.length-1-i])
  }
return reversed;
}

reverse3([1, 2, 3]) 
//→ [3, 2, 1]
reverse3([5, 11, 9]) 
//→ [9, 11, 5]
reverse3([7, 0, 0]) 
//→ [0, 0, 7]
