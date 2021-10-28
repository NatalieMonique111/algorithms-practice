/////////////////Imperative///////////////

function reverseString(str) {
  //declare a variable for the empty str
  let newStr = "";
  //iterating through the str with a for loop
  for (let i = str.length - 1; i >= 0; i--) {
    //console.log(i)
    //Updating the value/add each char to the new string(reversed)
    newStr += str[i];
    console.log(newStr);
  }
  //return string
  return newStr;
}

////////////////Declarative///////////////

function reverseString(str) {
  //need variable to turn string into an array
  let stringArray = str.split("");
  console.log(stringArray);
  //use reverse method for arrays
  stringArray.reverse();
  console.log(stringArray);
  //use join method for arrays
  console.log(stringArray.join(""));
  return stringArray.join("");
}

console.log(reverseString("hello"));
