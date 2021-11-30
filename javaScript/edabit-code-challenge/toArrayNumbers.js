//Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example: ["1", "3", "3.6"] ➞ [1, 3, 3.6]

function toNumberArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(parseFloat(arr[i]));
  }
  return newArr;
}

// Examples

// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]

// toNumberArray(["91", "44"]) ➞ [91, 44]

// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]

// Notes
// Some inputs are floats.
//why use parseFloat() instead of parseInt(): Aninteger has no decimal part, so any number "casted" to int will lose its //decimals. You should use parseFloat if you want to keep the decimal part.
//https://stackoverflow.com/questions/28894971/problems-with-javascript-parseint-decimal-string
