// The problem: On your website you want users to use a strong password, instead of something easy for someone to guess, like their birthday or dog’s name.
// Rules
// Must contain at least one number (Code: NUM)
// Must contain one and only one symbol from the allowed symbols (!, @, #, -, _) (Code: SYM)
// Must contain at least one uppercase ASCII letter (Code: UPPER)
// Must contain at least one lowercase ASCII letter (Code: LOWER)
// Write a function to check a prospective password, accepting a single string. Return true if it meets all the criteria. If it does not meet one or more of the criteria, return an array containing the shorthand code for rules it does not meet. This array is needed so you can show the user on the website what they are missing.

function checkPassword(password) {
  let arr = [];
  if (password.search(/[A-Z]/) === -1) {
    arr.push("UPPER");
  }
  if (password.search(/[a-z]/) === -1) {
    arr.push("LOWER");
  }
  if (password.search(/[0-9]/) === -1) {
    arr.push("NUM");
  }
  if (password.search(/[!@#_]/) === -1) {
    arr.push("SYM");
  }
  if (arr.length === 0) {
    return true;
  }
  return arr;
}
// console.log( “Capital check:“, password.search(/[A-Z]/));
// console.log( “Lowercase check:“, password.search(/[a-z]/));
// console.log( “Number check:“, password.search(/[0-9]/));
//  console.log( “Symbol check:“, password.search(/[!@#_]/)); (edited)
