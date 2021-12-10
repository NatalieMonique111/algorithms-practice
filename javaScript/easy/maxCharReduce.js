const maxRecurringChar = (str) => {
  //convert string to an array
  let stringSplit = str.split("");
  //store the array of characters in an object
  let store = {};

  //the following code populates the hashmap
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

  //keys method: takes an object and converts an array of just their keys
  //reduce method: comparing prevValue to the currentvalue and continues to move on
  //comparing d to a values and continues to compare it to the prevValue compared to nextValue
  return Object.keys(store).reduce((a, b) => (store[a] >= store[b] ? a : b));
};
console.log(maxRecurringChar("ddddaabbacada"));
