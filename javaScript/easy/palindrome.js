//* Ask if a built in method can be used or should I implement it myself. */

///////////////////////////////////
//The following version takes a single for loop
const isPalindrome = (str) => {
  for (let i=0; i < str.length; i++ ) {
    //subtracting the iterator variable from the length, allows us to 
    //simulatneously scan both sides of the array in the same loop. 
    if (str[i] !== str[str.length -1 -i]) {
      return false;
    }
  } 
  return true;
}

isPalindrome('anna'); 

//////////////////////////////////

//Warning: This 👇 is not a robust way to reverse a string. 
function palindrome(str) {
  //create a reversed version
  let reversed = str.split('').reverse().join('');
  //equality operator returns a boolean
  return reversed === str;
}

palindrome('mow'); 

//.split() - string method --> array
//The split() method divides a String into an ordered list of substrings, 
//puts these substrings into an array, and returns the array.  
//The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
//An Array of strings, split at each point where the separator occurs in the given string.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

//.reverse() - array method
//The reverse() method reverses an array in place. The first array element becomes 
//the last, and the last array element becomes the first.
//// Careful: reverse is destructive -- it changes the original array.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse


//.join() -  array method --> string
//The join() method creates and returns a new string by concatenating all of the elements in an array 
//(or an array-like object), separated by commas or a specified separator string. If the array has only one item, 
//then that item will be returned without using the separator.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join


