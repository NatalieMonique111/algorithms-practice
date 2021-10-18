// create a function that counts from 1 to num
// replace each number that is divisible by a certain number of strings

function fizzbuzz(num) {
  for (let i = 0; i < num; i++) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

// Steps:
// 1) Create a for loop to count up to the param num.
//2) use conditional statements to set a condition if the num is divisisible by a particualar number, then print a string.
// Don't forget a last else catch all statement that will print every interger up until the num.
