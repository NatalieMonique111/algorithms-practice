const maxRecurringChar = (str) => {
  //convert string to an array
  let stringSplit = str.split("");
  //store the array of characters in an object
  let store = {};
  //the following code populates the hashmap
  stringSplit.forEach((letter, index) => {
    if (!store[letter]) {
      store[letter] = 1;
    } else {
      store[letter] += 1;
    }
  });
  return Object.keys(store).reduce((a, b) => (store[a] >= store[b] ? a : b));
};

console.log(maxRecurringChar("ddddaabbacada")); //d
console.log(maxRecurringChar("natalie")); //a
console.log(maxRecurringChar("dogg")); //g
