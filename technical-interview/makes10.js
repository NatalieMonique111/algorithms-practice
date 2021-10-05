//Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
function makes10(a,b) {
  if (a === 10 || b ===10){
    return true;
  }
  else if( a + b === 10){
    return true;
  }
  else {
    return false;
}
}

console.log(makes10(9, 10))
//→ true
console.log(makes10(9, 9))
//→ false
console.log(makes10(1, 9))
// → true
