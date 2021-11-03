// each integer between 1 and 10 must multiply eachother including itself
// Nested loop to multiply first integer by other integers.
//might need an array of numbers from 1 to 10 (brute force used an array but do not need to)

function multiplicationTable(num) {
  // let arr = [1,2,3,4,5,6,7,8,9,10];
  let newArr = [];
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      newArr.push(i * j);
    }
  }
  return newArr;
}
console.log(multiplicationTable(12));
