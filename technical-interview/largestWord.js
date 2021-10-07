//Write a function that takes in a string and returns the largest word in the string. 
//If there are two or more words that are the same length, return the first word from the string with that length.
// Ignore punctuation and assume the string will not be empty. 

function largestWord(str){
  let strSplit = str.split(' ');
  let longestWordCount = 0;
  let word = '';
  for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWordCount){
      longestWordCount = strSplit[i].length;
      word = strSplit[i];
     }
  } 
  return word;
}

console.log(largestWord(`Which word in the string will be the longest?`)); 
//→ ‘longest’
console.log(largestWord(`I love JavaScript, even though it’s challenging`));
// → ‘challenging’ 

////////////////////////////////////////

let largestWord = (str) => {
  var largest = '';
  for (const word of str.split(' ')) {
    if (word.length > largest.length) {
      largest = word;
    }

}  
return largest;
}

console.log(largestWord(`Which word in the string will be the longest?`)); 
//→ ‘longest’