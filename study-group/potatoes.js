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
