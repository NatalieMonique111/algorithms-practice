//1) Remove duplicates from an array using a Set

let chars = ["A", "B", "A", "C", "B"];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);

//2) Remove duplicates from an array using indexOf() and filter() methods
let chars = ["A", "B", "A", "C", "B"];

let uniqueChars = chars.filter((c, index) => {
  return chars.indexOf(c) === index;
});

console.log(uniqueChars);
