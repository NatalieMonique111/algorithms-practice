//Count the number of "char" in the given string

function countChars(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      counter += 1;
    }
  }
  return counter;
}

console.log(countChars("haha", "a"));
