function analyze(string) {
  let count = {};
  let splitStr = string.split(" "); // ['The', 'quick', 'brown'....] ['ab', 'ab', 'ab' ]
  for (let i = 0; i < splitStr.length; i++) {
    // i = 0, 1
    if (count[splitStr[i]] == undefined) {
      count[splitStr[i]] = 1; // count{ab:1}
    } else {
      count[splitStr[i]]++; // count{ab:3}
    }
  }
  //console.log(count);
  return count;
}

console.log(analyze("the cat sleeps in the barn"));
