// Create a function to return the amount of potatoes there are in a string.

function potatoes(str) {
  let count = 0;
  let myStr = str;
  while (myStr.indexOf("potato") > -1) {
    count++;
    //substring take an index
    //index of return the first occurence, the + 6, six char
    //from the first occurence
    myStr = myStr.substring(myStr.indexOf("potato") + 6);
    // console.log("count", count, "myStr", myStr)
  }
  return count;
}
console.log(potatoes("123potato456potato")); // -> 2)
console.log(potatoes("potatoapple")); // ➞ 1)

//   potatoes("potato") ➞ 1
//   potatoes("potatopotato") ➞ 2
//   potatoes("potatoapple") ➞ 1

///////////////Variation/////////////////

function howManyPotatos(str, thingToMatch) {
  //use counter to keep count of the number of times a word in a string that is a match
  let count = 0;
  let myStr = str;
  //use a while loop to check against a condition to see if the word or string is not there
  while (myStr.indexOf(thingToMatch) > -1) {
    count++;
    //if condition is true, we increment by one each time the loop iterates by counting the number of thingstomatch in the string
    //we need to use the substring method and the indexof method to identify the substring in the larger string and isolate that thing to see the length of the substrings
    myStr = myStr.substring(myStr.indexOf(thingToMatch) + thingToMatch.length);
  }
  return count;
}

//test cases
console.log(howManyPotatos("potatoapple", "potato")); // -> 1
console.log(howManyPotatos("potato12potato", "potato")); // -> 2

// SIMPLE VERSION with REGEX  - no special character filter ////////

function potatoes(str) {
  // if the str is empty, then this is the fail fast method
  //BUT:  almost unnecessary because the count starts at zero,
  //and if the string is empty, then it is zero, but good to
  //put it in there to show that you are thinking of edge cases

  if (!str) {
    return "Please enter some characters into your string.  Thank you!";
    // return 0 you could also return a 0
  }

  // create a counter set to zero to track the number of potatoes

  let numberofPotatoes = 0;

  // use RegEx to create an array with the number of potato it finds

  let potatoString = str.match(/potato/g);

  //loop through the array to collect a count of the occurrences of potato
  //and adding to the counter each time potato is encountered in the array

  for (let i = 0; i < potatoString.length; i++) {
    if (potatoString[i] === "potato") {
      numberofPotatoes++;
    }
  }
  return numberofPotatoes;
}

console.log("expected result: >> 1 ", potatoes("potato"));
console.log("expected result: >> 2 ", potatoes("potatopotato"));
console.log("expected result: >> 3 ", potatoes("potatopotatopotatopot"));
console.log("expected result: >> message. ", potatoes(""));

// MORE COMPLEX VERSION with REGEX - no special character filter ////////

function potatoes(str) {
  // if the str is empty, then this is the fail fast method
  //BUT:  almost unnecessary because the count starts at zero,
  //and if the string is empty, then it is zero, but good to
  //put it in there to show that you are thinking of edge cases

  if (!str) {
    return "Please enter some characters into your string.  Thank you!";
    // return 0 you could also return a 0
  }

  // create a counter set to zero to track the number of potatoes

  let numberofPotatoes = 0;

  //use RegEx to filter out all non-letters, then create an array with the number of potato it finds

  let potatoString = str.replace(/[^a-zA-Z]/g, "").match(/potato/g);

  //loop through the array to collect a count of the occurrences of potato
  //and adding to the counter each time potato is encountered in the array

  for (let i = 0; i < potatoString.length; i++) {
    if (potatoString[i] === "potato") {
      numberofPotatoes++;
    }
  }
  return numberofPotatoes;
}

console.log("expected result: >> 1 ", potatoes("potato"));
console.log("expected result: >> 2 ", potatoes("potatopotato"));
console.log("expected result: >> 3 ", potatoes("potatopotatopotatopot"));
console.log("expected result: >> message. ", potatoes(""));
console.log("expected result: >> 2 ", potatoes("pot3at4opotatasop2otatop%&ot"));
