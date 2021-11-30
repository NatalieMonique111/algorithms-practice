// Given a string, return a new string where the first and last chars have been exchanged.
//The String object's charAt() method returns a new string consisting of the single UTF-16 code unit 
//located at the specified offset into the string.

function front_back(str){
  if(str.length === 1){
    return str;
  }
  //takes the first index
  let first = str.charAt(0);
  //takes the last index
  let last= str.charAt(str.length-1);
  //takes whats in between
  let newStr= str.slice(1,str.length-1);
return `${last}${newStr}${first}`;
}
  

console.log(front_back('code'));
//→ 'eodc'
console.log(front_back('a'));
//→ 'a'
console.log(front_back('ab'));
//→ 'ba'