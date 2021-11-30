//Create a function that returns true if a string contains any spaces.

// Examples
// hasSpaces("hello") ➞ false

// hasSpaces("hello, world") ➞ true

// hasSpaces(" ") ➞ true

// hasSpaces("") ➞ false

// hasSpaces(",./!@#") ➞ false

// Notes
// An empty string does not contain any spaces.
// Try doing this without RegEx.

//////////////////imperative/////////////

function hasSpaces(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      return true;
    }
  }
  return false;
}

/////////////////declarative////////////

function hasSpaces(str) {
  return str.includes(" ");
}
