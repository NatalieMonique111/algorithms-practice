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
