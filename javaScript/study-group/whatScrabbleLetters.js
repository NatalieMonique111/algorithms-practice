// problem 1:
// given a word(string), returns the letters (scrabble tiles) you need to make the word as an object. You can ignore spaces, and capitalization should not matter

const whatScrabbleLetters = (word) => {
  //convert string to array with split
  const wordArray = word.split("");
  //create an object
  const LETTER_HOLDER = {};
  //iterate through loop use for loop for i (character) in the array
  wordArray.forEach((letter, index) => {
    //checking to see if letter is in the hashmap, if not set letter into hashmap value to 1
    // if (a === undefined) if (a ===0) if (a=== '') if (a=== null)
    // (if !a)
    if (!LETTER_HOLDER[letter]) {
      // letter === undefined
      //assign value to object
      LETTER_HOLDER[letter] = 1;
    } else {
      LETTER_HOLDER[letter] += 1;
    }
  });
  //return an object with key value pairs of each character and how much they appear in the string
  return LETTER_HOLDER;
};

console.log(whatScrabbleLetters("apple"));
console.log(whatScrabbleLetters("apple")); // returns {a:1, p:2, l:1 , e: 1}
console.log(whatScrabbleLetters("taco cat")); // returns {t: 2, a: 2, c: 2}
console.log(whatScrabbleLetters("taco CAT")); // returns {t: 2, a: 2, c: 2}

//***NOTES about map vs forEach. map returns an array and forEach doesn't.
// problem 2:
// given a word, and an object representing a scrabble 'hand', aka a list of tiles
//  return true if that word can be made using those the scrabble tiles

/////////////////string method////////////////

function whatScrabbleLetters(word) {
  let store = {}; //empty
  //loop to iterate through the word string
  for (let i = 0; i < word.length; i++) {
    if (!store[word[i]]) {
      store[word[i]] = 1;
    } else {
      store[word[i]]++;
    }
  }
  return store;
}

console.log(whatScrabbleLetters("apple"));
