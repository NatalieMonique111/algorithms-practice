//Given an array of ints with a length of 3, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.

/////////BUILT IN METHOD///////
function reverse3(arr) {
  return arr.reverse();
}

//////////////////////////////
function reverse3(arr) {
  let reversed = [];
  for (i = 0; i < arr.length; i++) {
    reversed.push(arr[arr.length - 1 - i]);
  }
  return reversed;
}

reverse3([1, 2, 3]);
//→ [3, 2, 1]
reverse3([5, 11, 9]);
//→ [9, 11, 5]
reverse3([7, 0, 0]);
//→ [0, 0, 7]

/////////// BRUTE-FORCE STYLE /////////////////////

function reverseArray(arr) {
  /// create a temprorary container which will start out as empty
  /// for loop to iterate through the array
  /// reverse order and push to the container array
  /// return the container array
  let tempArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    tempArray.push(arr[i]);

    //  console.log(tempArray);
  }
  return tempArray;
}

console.log(
  "expected result:['a', -1, 5, 4, 3, 2, 1] >>",
  reverseArray([1, 2, 3, 4, 5, -1, "a"])
);

////////////// BUILT-IN METHOD ////////////////////

// function reverseArray(arr) {
//  return arr.reverse();
// }

// console.log("expected result:  >>", reverseArray([1, 2, 3, 4, 5, -1, 'a']));
