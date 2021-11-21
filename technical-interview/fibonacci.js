//Probably one of the most famous algorithms ever, but still lot of people struggles when trying to find an efficient solution. Let me introduce you to the Fibonacci sequence.

function fibonacci(num) {
  var a = 1,
    b = 0,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

////////Recursive Solution

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
