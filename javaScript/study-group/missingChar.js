// Given a non-empty string and an int n, return a new string where the char at index n has been removed.
// The value of n will be a valid index of a char in the original string
// (i.e. n will be in the range 0..len(str)-1 inclusive).

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
