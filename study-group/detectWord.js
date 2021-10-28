//A word is on the loose and now has tried to hide amongst a crowd of tall letters!
//Help write a function to detect what the word is, knowing the following rules:

//////////////////////Imperative/////////////

function detectWord(str) {
  let newWord = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      //if they are lowercase push it to the new string
      newWord += str[i];
    }
  }

  return newWord;
}

console.log("Expected result: cat >>", detectWord("UcUNFYGaFYFYGtNUH")); // -> "cat"
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr")); // ➞ "burglar"
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")); /// ➞ "embezzlement"

///////////////////Declarative////////////////

function detectWord(str) {
  let newStr = str.replace(/[^a-z]/g, "");
  return newStr;
}

console.log("Expected result: cat >>", detectWord("UcUNFYGaFYFYGtNUH")); // -> "cat"
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr")); // ➞ "burglar"
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")); /// ➞ "embezzlement"
