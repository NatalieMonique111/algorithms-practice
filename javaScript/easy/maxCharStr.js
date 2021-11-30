//Write a function that returns the most-used letter in a string.

///////////////////////FREQUENCY WITH OBJECT///////////////////////////////////
function maxCharWithObject(str) {
  let freqCounter = {};
  let lcStr = str.toLowerCase();

  for (let char of lcStr) {
    freqCounter[char] = freqCounter[char] + 1 || 1;
  }

  let maxCount = 0;
  let maxChar = null;
  for (let key in freqCounter) {
    if (freqCounter[key] > maxCount) {
      maxCount = freqCounter[key];
      maxChar = key;
    }
  }
  return maxChar;
}

console.log(maxCharWithObject("Danny"));

///////////////////////////FREQUENCY WITH MAP////////////////////////////////
function maxCharWithMap(str) {
  // this uses ES6 Map, which defines entries as a 2-element array, ['key', 'value']
  // See - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
  const letters = new Map();

  // Create map of chars to count of how often it occurs, i.e. ['a', 1]
  for (const s of str) {
    if (letters.has(s)) {
      const nextCnt = letters.get(s) + 1;
      letters.set(s, nextCnt);
    } else {
      letters.set(s, 1);
    }
  }

  // Iterate over all entries, checking max count per entry, then set the result to current max
  let maxCnt = 0;
  let result;
  for (const entry of letters.entries()) {
    if (entry[1] > maxCnt) {
      maxCnt = entry[1];
      result = entry[0];
    }
  }
  return result;
}

console.log(maxCharWithMap("afjdsdlkjfsdiiiidsdfoiusdioppoiiii")); // "i"
