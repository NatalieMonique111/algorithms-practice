// 7. Create a function that filters out negative numbers
// In this challenge, you'll have a function that takes an array as an input and returns an array. But if all goes according to plan, it'll remove the negative numbers. This is another example of a task that'll be useful when combing through data and looking for clever ways to eliminate "bad data."

//function that filters negative numbers out
//input: array with mix of numbers
//output: array with just of numbers without negative numbers

//define function called filterNegativeNums
function filterNegativeNums(arr) {
  //use filter method
  // return that array
  const result = arr.filter((el) => el > 0);
  return result;
}

// console.log(filterNegativeNums([1, 4, -2]))
console.log(
  filterNegativeNums([
    2,
    6,
    -8,
    -1,
    1,
    -0,
    -99,
    0,
    100,
    11,
    "a",
    true,
    false,
    undefined,
    NaN,
    null,
    "*",
  ])
);
