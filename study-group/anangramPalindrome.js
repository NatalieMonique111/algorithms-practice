// Palindromes are strings that read the same forwards and backwards: like racecar and mom
// Given a string of letters, return true if those letters can make a palindrome.
// EX1:
// Input: "carrace"
// Output: true

// Input: "techtonica"
// Output: false

// Input: "babat"
// Output: true ("batab" is a palindrome)

////////////////////.  PSEUDOCODE.  /////////////////
// 1. create an empty array to hold the letters without a pair
// 2. create a for-loop to iterate through the string that is being passed in
// 3. create a variable to hold the letter of the string
// 4. create a conditional statement to check if the array already has our letter
//    using the INCLUDE method
// 5. if it EXISTS then we will remove the letter using the SPLICE method
// 6. if it is does NOT exist, then we will add it to the array with the PUSH method
// 7. at the end check the amount of letters in the array
//    if it is less than 2, then it returns TRUE because it is a palindrome, otherwise false

function isAnagramPalindrome(string) {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    // console.log("array >>", array)
    // console.log("letter >>", letter)
    if (array.includes(letter)) {
      array.splice(array.indexOf(letter), 1);
    } else {
      array.push(letter);
    }
  }
  return array.length < 2 ? true : false;
}

console.log("expected result: true >>", isAnagramPalindrome("carrace"));
console.log("expected result: true >>", isAnagramPalindrome("racecar"));
console.log("expected result: true >>", isAnagramPalindrome("babat"));
console.log("expected result: false >>", isAnagramPalindrome("techtonica"));
