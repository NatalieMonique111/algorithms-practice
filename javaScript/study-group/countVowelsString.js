// Given a string of text containing 0 or more vowels, count the number of vowels that can be found within the text. For example:

//vowelsCounter('anehizxcv')

// Given a string of text containing 0 or more vowels, count the number of vowels that can be found within the text. For example:

//vowelsCounter('anehizxcv')

const vowelsCounter = (string) => {
  //typeof string !== includes numbers vs just !string
  if (typeof string !== "string" || !string) {
    return "Please enter a valid string";
  }
  //declare counter variable as empty array
  let counter = 0;

  // //convert string to array
  // let stringSplit = string.split("");

  vowelArray = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < string.length; i++) {
    if (vowelArray.includes(string[i])) {
      counter++;
    }
  }
  return counter;
};

console.log(vowelsCounter("anehizxcvu")); //expects 4
// console.log(vowelsCounter('jen'))//expects 1
// console.log(vowelsCounter('elizabeth'))//expects 4
// console.log(vowelsCounter('tara'))//expects 2
// console.log(vowelsCounter(123)
