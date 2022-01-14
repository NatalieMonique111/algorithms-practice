/*
Try to make the solution to this problem as efficiently as possible. Consider using loops that would allow you to type the fewest characters/commands. While you could simply print the even numbers, get creative and see how you could output them in a way that would work up to 10 or even up to 10,000 with little extra effort. */

//======= while loop ======= //
function printEvens(n) {
  let i = 0;
  while (i <= n) {
    if (i % 2 == 0) {
      console.log(i);
    }
    i++;
  }
}

printEvens(100);

//========= for loop ======= //
function printEvens(n) {
  for (i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
printEvens(100);

//======== do while loop ====== //
function printEvens(n) {
  let i = 0;
  do {
    if (i % 2 == 0) {
      console.log(i);
    }
    i++;
  } while (i <= n);
}
printEvens(100);
