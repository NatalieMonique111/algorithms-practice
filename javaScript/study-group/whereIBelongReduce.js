function whereIBelong(arr1, target) {
  arr1.push(target);
  arr1.reduce((a, b) => (a >= b ? a : b));
  console.log(arr1.sort());

  return arr1.indexOf(target);
}

console.log(whereIBelong([1, 2, 3, 4], 3.5));
