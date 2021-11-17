/**
 * 
For this problem, we'll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more, so 15 rounds up to 20. Alternately, round down to the previous multiple of 10 if its rightmost digit is less than 5, so 12 rounds down to 10. Given 3 ints, a b c, return the sum of their rounded values. To avoid code repetition, write a separate helper "def round10(num):" and call it 3 times. Write the helper entirely below and at the same indent level as roundSum().
roundSum([16, 17, 18]) → 60
roundSum([12, 13, 14]) → 30
roundSum([6, 4, 4]) → 10
roundSum([7, 3, 1])//10
//edge cases
//an empty array return 0
//"string" assume no string only ints
//loop to iterate the array
//array methods Math.round()
//round the ints and then I need to sum them
const roundSum = (arr) => {
  
}
 */
const roundSum = (arr) => {
  //iterate through the array
  let roundedArraySum = 0;
  for (let i = 0; i < arr.length; i++) {
    //round each number in the array to the nearest 10
    //condition for each number in the array
    //how to actually round the number
    //how to know that 16 rounds up
    // O (2n ) ~= O(n)
    // for each number:
    // multiply x 10,
    // print the letter in Spanish
    if (arr[i] % 10 >= 5) {
      let roundedNumber1 = Math.ceil(arr[i] / 10) * 10;
      roundedArraySum += roundedNumber1;
    } else if (arr[i] % 10 < 5) {
      let roundedNumber2 = Math.floor(arr[i] / 10) * 10;
      roundedArraySum += roundedNumber2;
    }
  }
  return roundedArraySum;
};
//roundSum([16, 17, 18])// → 60
roundSum([12, 13, 14]); // → 30
//roundSum([6, 4, 4])// → 10
