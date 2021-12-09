// Given a string of text containing 0 or more vowels, count the number of vowels that can be found within the text. For example:
function vowelsCounter(str) {
  let vowelArr = ["a", "e", "i", "o", "u"];
  let strArray = str.split("");

  const result = strArray.filter((element) => vowelArr.includes(element));

  return result.length;
}
vowelsCounter("anehizxcv"); // will return 3
