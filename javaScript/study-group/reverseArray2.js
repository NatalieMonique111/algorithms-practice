// This challenge is particularly helpful if you're planning to become a Data Scientist. Manipulating data is a significant part of the role, and building the foundations now will help you later down the road when you're working with large databases.

// Start small here and work your way up. Begin with an array of 5 numbers, and then try your program with a larger array to verify its success.

/////[1, 2, 3, 4, 5, -1, 'a']
///// desired output:  ['a', -1, 5, 4, 3, 2, 1]

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
