//Minimal VI: Ternary Operator- Edabit

// In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

// Write a function that returns the strings:

// "both" if both given booleans a and b are true.
// "first" if only a is true.
// "second" if only b is true .
// "neither" if both a and b are false.
// Tips
// If-else statements can be written as a oneliner using Javascript's ternary operator.

function areTrue(a, b) {
  if (a == true) {
    if (b == true) {
      return "both";
    } else {
      return "first";
    }
  } else if ((b = true)) {
    return "second";
  } else {
    return "neither";
  }
}

///////////////Ternary/////////////////

function areTrue(a, b) {
  return a && b ? "both" : a ? "first" : b ? "second" : "neither";
}
