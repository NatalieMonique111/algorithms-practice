//count the number of words in a string

function countWords(str) {
  return str.trim().split(/\s+/).length;
}

console.log(countWords("The cow jumped over the moon"));

// from Use JavaScript to count words in a string, WITHOUT using a regex - this will be the best approach

function wordCount(str) {
  return str.split(" ").filter(function (n) {
    return n != "";
  }).length;
}

console.log(wordCount("The cow jumped over the moon"));

//https://stackoverflow.com/questions/40385327/use-javascript-to-count-words-in-a-string-without-using-a-regex/40385425#40385425
