//https://leetcode.com/problems/plus-one/
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]

// Example 3
// Input: digits = [0]
// Output: [1]

// Example 4
// Input: digits = [9]
// Output: [1,0]

// Example 5
// Input: digits = [2,5,9]
// Output: [2,6,0]
// */

var plusOne = function (digits) {
  //join the array into a string
  let str = digits.join("");
  //convert the string into a number
  let num = BigInt(str);
  console.log(num);
  //add one to num
  let newNum = num + BigInt(1);
  //convert num back into a string
  let newStr = newNum.toString();
  //convert string into num
  let result = newStr.split("");

  return result;
};

console.log(addOne([1, 2, 3]));

console.log(addOne([4, 3, 2, 1]));

console.log(addOne([0]));

console.log(addOne([9]));
