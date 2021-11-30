// 1. Print all even numbers from 0 – 10
// Try to make the solution to this problem as efficiently as possible. Consider using loops that would allow you to type the fewest characters/commands. While you could simply print the even numbers, get creative and see how you could output them in a way that would work up to 10 or even up to 10,000 with little extra effort.

//print all even numbers from 0 - 10

//Both O(n)
//While loop method: total 41
function findEvenNumbers() {
  let i = 0;
  while (i <= 10) {
    console.log(i);
    i += 2;
  }
}

// findEvenNumbers();

//For loop method: total 37 chars
function findEvenNumbers() {
  //for loop to loop through a set of numbers, increment by 2

  for (let i = 0; i < 11; i += 2) {
    //console log aka print the i
    console.log(i);
  }
}
//call the function
findEvenNumbers();
