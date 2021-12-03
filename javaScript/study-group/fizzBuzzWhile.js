// Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

//multiple of 3 - 3, 6, 9
//multiple of 5 - 10, 15, 20
//multiple of 3 and 5 - 15, 30, 45

const FizzBuzz = (num) => {
  let i = 1;
  while (i <= num) {
    if (i % 15 === 0) {
      console.log(i + " FizzBuzz");
    } else if (i % 5 === 0) {
      console.log(i + " Buzz");
    } else if (i % 3 === 0) {
      console.log(i + " Fizz");
    } else {
      console.log(i);
    }
    i++;
  }
};

FizzBuzz(100);

// let i = 1;
// while (i <= 100) {
//   if (i % 15 === 0) {
//     console.log(i + " FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log(i + " Buzz");
//   } else if (i % 3 === 0) {
//     console.log(i + " Fizz");
//   } else {
//     console.log(i)
//   }
//   i++;
// }
