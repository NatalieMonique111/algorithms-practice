// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

/////////////Imperative/////////////
function parseArray(arr) {
  let newArray = [];
  for (let el of arr) {
    if (typeof el === "number") {
      newArray.push(el.toString());
    } else {
      newArray.push(el);
    }
  }
  return newArray;
}

/////////////Declarative///////////////

function parseArray(arr) {
  return arr.map(String);
}

////////////Solution///////////

console.log(parseArray([1, 2, "a", "b"]));

console.log(parseArray(["abc", 123, "def", 456]));

console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]));

console.log(parseArray([]));
