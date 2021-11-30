// Given a string, return a new string where the first and last chars have been exchanged.

///////////Declarative///////////
function front_back(str) {
  if (str.length === 1) {
    return str;
  }
  //takes the first index
  let first = str.charAt(0);
  //takes the last index
  let last = str.charAt(str.length - 1);
  //takes whats in between
  let newStr = str.slice(1, str.length - 1);
  return last + newStr + first;
}

console.log(front_back("code"));
//→ 'eodc'
console.log(front_back("a"));
//→ 'a'
console.log(front_back("ab"));
//→ 'ba'

///////////Imperative////////
function front_back(str) {
  //create new variable to hold new string
  let aStr = "";

  //check for empty string
  if (str.length == 0) {
    return " ";
  }

  // define first index of string, charBeginning = c
  const charBeginning = str.charAt(0);

  // define last index of string, charEnding = e
  const charEnding = str.charAt(str.length - 1);

  // initially start with adding last char to string
  aStr += charEnding;

  //loop through string to add rest of character to the string starting with charEnding
  for (let i = 1; i < str.length - 1; i++) {
    aStr += str[i];
  }

  //add the first char to end of string
  aStr += charBeginning;

  //return new string
  return aStr;
}
