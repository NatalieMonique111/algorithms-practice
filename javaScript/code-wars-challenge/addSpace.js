// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  let arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      if (!(arr[i - 1] === " ")) {
        arr.splice(i, 0, " ");
      }
    }
  }
  return arr.join("");
}

solution("camelCase");
