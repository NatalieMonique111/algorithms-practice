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