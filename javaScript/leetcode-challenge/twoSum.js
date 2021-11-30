//1. Two Sum -EASY

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

var twoSum = function (nums, targetSum) {
  const store = {};
  for (let i = 0; i < nums.length; i++) {
    let currentValue = nums[i]; //current index value (number)
    let neededValue = targetSum - currentValue; // currentValue + neededValue = targetSum *solution*
    if (store[currentValue] !== undefined) {
      return [store[currentValue], i];
    } else {
      store[neededValue] = i;
    }
  }
};
//note: If that property exists, the result is the value it points to. If that property doesn’t exist, the result is undefined.

/////////////////Alternate solution///////////////

const twoSum = function (nums, target) {
  const store = {};
  for (let i = 0; i < nums.length; i++) {
    if (store[nums[i]] >= 0) {
      return [store[nums[i]], i];
    } else {
      //modifies/updates the store object with a new property (key : value), assigns value.
      store[target - nums[i]] = i; //the needed value -> the key & index -> the value  { 7:0 }
    }
  }
};

twoSum([2, 7, 11, 15], 9); // expects [0,1]

//Note: helpful Youtube video: https://www.youtube.com/watch?v=_CoCO62fn_E
