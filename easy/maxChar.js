// Most used letter in a string
// https://stackoverflow.com/questions/22590023/finding-the-most-frequent-character-in-a-string-javascript

//  i.e. doggs
//   charMap = {
//   d: 1,
//   o: 1,
//   g: 2,
//   }

function getMaxChar(str) {
  let charMap = {};
  let charCount = 0;
  let maxChar = "";

  //iterating through the string and populating the hash map
  for (let char of str) {
    // [d,o,g,g]
    if (charMap[char]) {
      // {d:1} is "d" in the map already?
      charMap[char]++; // increment the value,
    } else {
      // d is not in map, add it: {d: 1}
      // every char will be assigned value of 1 at first appearance
      charMap[char] = 1;
    }
  }
  //this loop iterates through the object and sets char count to the most frequent char
  for (let char in charMap) {
    // 'd', 'o', 'g'
    if (charMap[char] > charCount) {
      // compare each number/value, ie. 1 or 2
      charCount = charMap[char];
      //console.log(charMap[char], char);
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(getMaxChar("dogg"));

/////////////Without comments////////////

function getMaxChar(str) {
  let charMap = {};
  let charCount = 0;
  let maxChar = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > charCount) {
      charCount = charMap[char];

      maxChar = char;
    }
  }
  return maxChar;
}

console.log(getMaxChar("dogg"));
