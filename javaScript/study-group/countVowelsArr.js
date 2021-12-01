// return total number of vowels in an array
const totalVowels = (arr) => {
  const VOWEL_LIST = ["a", "e", "i", "o", "u", "y"];

  // top level goal
  let total = 0;

  //forEach letter (or any random variable) in the array, then do something, index is optional. You don't need to return anything in forEach method.
  const added = arr.forEach((letter, index) => {
    // do something to each item
    if (VOWEL_LIST.includes(letter)) {
      // if letter is in VOWEL_LIST, increment by 1
      total = total + 1;
    }
    return "letter is " + letter;
  });
  console.log(added); // we don't need to return this array, so we dont need map
  return total;
};
console.log(totalVowels(["a", "b", "c", "d", "e", "f", "u", "i", "x", "a"]));
