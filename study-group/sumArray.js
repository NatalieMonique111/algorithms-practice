// 4. Calculate the sum of numbers within an array
// You can create your own array of numbers but consider trying this problem with a few different sets to verify your solution. Have one array with negative and positive numbers and another with integers and decimals.

// You could also try using arrays of different lengths. If you're feeling comfortable with this, try the slightly more challenging bonus challenge below.

// Bonus intermediate challenge: Create a function that can return the sum of a particular column or row number in a table.

/////////////////Imperative//////////////

let array = [1, 2, 3, 4, 5];
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // console.log("first ", array[i]);
    // console.log("second", array[i + 1]);
    sum += array[i];
  }
  return sum;
}

console.log(sumArray(array));

//////////////////Declarative////////////

// sum all the integers in an array
function sumArray(array) {
  let sum = (a, b) => a + b;
  return array.reduce(sum);
}
console.log(sumArray([1, 2, 3, 4, 5]));
