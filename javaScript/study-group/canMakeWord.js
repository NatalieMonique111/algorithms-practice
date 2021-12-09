// problem 2:
// given a word, and an object representing a scrabble 'hand', aka a list of tiles
//  return true if that word can be made using those the scrabble tiles
// you can ignore spaces, and capitalization should not matter

// examples:
//  canMakeWord('apple', {a:1, p:2, l:1 , e: 1, x: 2, w: 1}) returns true (it is OK to have extra letters like x and w)

function canMakeWord(word, scrabbleTiles) {
  let store = {}; //empty
  //loop to iterate through the word string
  for (let i = 0; i < word.length; i++) {
    if (!store[word[i]]) {
      store[word[i]] = 1;
    } else {
      store[word[i]]++;
    }
  }
  //use Object.is() method to compare to values;
  for (let j in scrabbleTiles) {
    if (store[j] <= scrabbleTiles[j]) {
      store[j] -= store[j];
    }
  }
  return Object.values(store).every((nums) => nums === 0);
}

// console.log(canMakeWord("appple", { a: 1, p: 2, l: 1, e: 1, x: 2, w: 1 })); //false
console.log(canMakeWord("apple", { a: 1, p: 2, l: 1, e: 1, x: 2, w: 1 })); // true

//  canMakeWord('apple', {a:1, p:1, l:1 , e: 1}) returns false (only 1 p)
//  canMakeWord('apple', {a:1, p:2, l:1 }) returns false  (missing letter e)
//  canMakeWord('pecan pie', {a:2, p:2, c:1, n:2, i: 1, e: 2 }) returns true

////////////////////Another Solution//////////////////

function tileGame(word, tiles) {
  for (let i = 0; i < word.length; i++) {
    if (tiles[word[i]]) {
      tiles[word[i]]--;
    } else {
      return false;
    }
    if (tiles[word[i]] < 0) {
      return false;
    }
  }
  return true;
}

console.log(tileGame("apple", { a: 1, p: 2, l: 1, e: 1, x: 2, w: 1 })); //true
console.log(tileGame("aapple", { a: 1, p: 2, l: 1, e: 1, x: 2, w: 1 })); //false
console.log(tileGame("ccpple", { a: 1, p: 2, l: 1, e: 1, x: 2, w: 1 })); //false
