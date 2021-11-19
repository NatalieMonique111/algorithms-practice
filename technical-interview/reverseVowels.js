// Given a string, your task is to reverse only the vowels of the string.

// Examples:

// Input : hello
// Output : holle

// Input : hello world
// Output : hollo werld

function isVowel(c) {
  return (
    c == "a" ||
    c == "A" ||
    c == "e" ||
    c == "E" ||
    c == "i" ||
    c == "I" ||
    c == "o" ||
    c == "O" ||
    c == "u" ||
    c == "U"
  );
}

function reverseVowel(str) {
  //checks for null, undefined, empty string, one character, type check
  if (!str || str.length <= 1 || typeof str !== "string") {
    return "please enter valid string";
  }
  let reverseVowels = "";
  //reverse loop, going to reverse the vowels only.
  for (let i = str.length - 1; i >= 0; i--) {
    //if it is a vowel the its being added to the string reverseVowels
    if (isVowel(str[i])) {
      reverseVowels += str[i];
    }
  }
  let result = "";
  let vowelsIndex = 0;
  //iterated through the str again, but if it's a vowel then adds the reversed vowels to result variable.
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      result += reverseVowels[vowelsIndex];
      vowelsIndex++;
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(reverseVowel("hello world"));
console.log(reverseVowel("hello"));
console.log(reverseVowel("pug dog"));
console.log(reverseVowel(undefined));
console.log(reverseVowel("a"));
console.log(reverseVowel(123));



//////////////////////Optimal Solution///////////////////////
https://www.geeksforgeeks.org/reverse-vowels-given-string/

// JavaScript program to reverse order of vowels
     
    // utility function to check for vowel
    function isVowel(c) {
      return (c == 'a' || c == 'A' || c == 'e'
              || c == 'E' || c == 'i' || c == 'I'
              || c == 'o' || c == 'O' || c == 'u'
              || c == 'U');
  }
 
  // Function to reverse order of vowels
  function reverseVowel(str1) {
      let j = 0;
      // Storing the vowels separately
      let str = str1.split('');
      let vowel = "";
      for (let i = 0; i < str.length; i++) {
          if (isVowel(str[i])) {
              j++;
              vowel += str[i];
          }
      }
 
      // Placing the vowels in the reverse
      // order in the string
      for (let i = 0; i < str.length; i++) {
          if (isVowel(str[i])) {
              str[i] = vowel[--j];
          }
      }
 
      return str.join("");
  }
   
  let str = "hello world";
    document.write(reverseVowel(str));
  

    //////////////////////////////Using REGEX/////////////////////////

    function reverseVowels(str){
      var vowels = str.match(/[aeiou]/g);
      return str.replace(/[aeiou]/g, () => vowels.pop());
   }
   
   // example
   var original = 'James Bond';
   var result = reverseVowels(original);
   
   // output for snippet
   console.log( `${original}->`,result);
   //James Bond-> Jomes Band