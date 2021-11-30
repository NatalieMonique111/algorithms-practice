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

/////////////////removes from the {}//////////////////

function analyze2(string) {
  //accept a string
  //hash map
  let count = {};
  let list = "";
  //split the string an array
  let splitStr = string.split(" "); // ['The', 'quick', 'brown'....] ['ab', 'ab', 'ab' ]
  //iterating through the array of substrings
  for (let i = 0; i < splitStr.length; i++) {
    // i = 0, 1
    if (count[splitStr[i]] === undefined) {
      //console.log(splitStr[i])
      count[splitStr[i]] = 1; // count{ab:1}
    } else {
      count[splitStr[i]]++; // count{ab:3}
    }
  }
  for (const [key, value] of Object.entries(count)) {
    list += ` ${key}:${value} `; // "a 5", "b 7", "c 9"
  }

  return list;
}

console.log(analyze2("the cat sleeps in the barn"));
