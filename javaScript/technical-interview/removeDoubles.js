function removeDoubles(str) {
  let newStr = "";
  //write a loop, interate through string
  for (let i = 0; i < str.length; i++) {
    //conditional statement comparing str[i] to str[i+1]
    if (str[i] === str[i + 1]) {
      newStr += str[i];
      //how to check if a character occurs only once
    } else if (i === str.length - 1) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log("expected result: abdea,", removeDoubles("aabbddeea"));
