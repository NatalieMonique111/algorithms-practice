// 1. Print all even numbers from 0 – 10
// Try to make the solution to this problem as efficiently as possible. Consider using loops that would allow you to type the fewest characters/commands. While you could simply print the even numbers, get creative and see how you could output them in a way that would work up to 10 or even up to 10,000 with little extra effort.

//Print all numbers from 0 – 10

function printNums(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
}

console.log(printNums(10));

//Print all even numbers from 0 – 10

function printNums(num) {
  for (let i = 0; i <= num; i += 2) {
    console.log(i);
  }
}

console.log(printNums(10));

///////////////////Count Down//////////////

//Print all numbers from 10 – 0 in descending order

function countDown(num) {
  for (let i = num; i >= 0; i--) console.log(i);
}

console.log(countDown(10));

//Print all *even numbers* from 10 – 0 in descending order
function countDown(num) {
  for (let i = num; i >= 0; i -= 2) console.log(i);
}

console.log(countDown(10));
