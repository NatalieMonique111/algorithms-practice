// Given a string of text, find and return the most recurring character. e.g
//maxRecurringChar('aabbacada') // will return 'a'

const maxRecurringChar = (str) => {
  //convert string to an array
  let stringSplit = str.split("");
  //can map as well

  //store the array of characters in an object
  let store = {};

  let counter = 0;

  //declare maxChar container
  let maxChar = "";
  //const array1 = [1, 4, 9, 16];

  //use foreach letter in the stringsplit array
  stringSplit.forEach((letter, index) => {
    //if char doesn't exist, assign it to 1
    if (!store[letter]) {
      store[letter] = 1;
    }
    //if char already exists, add 1
    else {
      store[letter] += 1;
      //store[letter[i]]++;
    }
  });
  console.log(store);

  //loop through the object
  for (let letter in store) {
    //condition to check which char is largest
    if (store[letter] > counter) {
      counter = store[letter];
      maxChar = letter;
    } //end of if
    console.log(store[letter]);
  } //end of for in
  //return maxChar
  return maxChar;
};
console.log(maxRecurringChar("aabbacada"));
console.log(maxRecurringChar("aabbbbcad"));
