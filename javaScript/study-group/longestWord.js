function findLongestWordLength(str) {
  //store splitString in a variable convert to array using .split(" ")//remember space
  let splitString = str.split(" ");
  //each word is an element in the array
  console.log(splitString);
  //declare variable for a counter and set to 0
  let counter = 0; //need to use let to update the counter
  //iterate through the array longest word using a for of or for
  for (let el of splitString) {
    //for every element of splitString
    //write a conditional to compare the the length of word to the word count
    if (el.length > counter) {
      //counter will be updated for each word length
      //take the length of the word/element that you are currently looking at
      //put that length into the counter
      counter = el.length; //counter = element length
      console.log(counter);
    }
  } //end of for
  return counter;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
); // -> "jumped"
