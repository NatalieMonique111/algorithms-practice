// Given a non-empty string and an int n, return a new string where the char at index n has been removed.
// The value of n will be a valid index of a char in the original string
// (i.e. n will be in the range 0..len(str)-1 inclusive).

//* Note: Needs Correction

function missing_char(str, n) {
  //variable to hold new string
  let temp = "";
  //iterate through string until the second to last index
  for (let i = 0; i < n - 1; i++) {
    //adding each char of string index to temp variable
    temp += str[i];
  }
  //then iterating through the rest of the string after the second to last index
  for (let i = n; i < str.length; i++) {
    temp += str[i];
  }
  return temp;
}
// input = kitten, 4
// output = kiten

////////////DECLARATIVE/////////

const missingChar = (str, n) => {
  return str.substring(0, n) + str.substring(n + 1, str.length);
};

///////////IMPERATIVE//////////

function missing_char(str, n) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i !== n) {
      result += str[i];
      //result = result + str[i];
    }
  }
  return result;
}

console.log(missing_char("kitten", 1));
//→ 'ktten'
console.log(missing_char("kitten", 0));
//→ 'itten'
console.log(missing_char("kitten", 4));
//→ 'kittn'
