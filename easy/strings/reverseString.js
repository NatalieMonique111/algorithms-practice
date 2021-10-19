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

reverseString("hello");

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

reverseString("hello");
//REACTO
//Read the question
//Example or Expectations
//olleh or ydwoH
//result must be string

//Approach
//need to turn string into an array
//need a variable to hold the split string
//imperative = implementing yourself kind of like brute force
//declarative = using methods
//strings
//you can't change an indiv character in a string
//if you are manipulating a string you need to change it into an array

//Code psuedocode and then syntax
