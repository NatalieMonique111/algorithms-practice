let arr1 = ["A", "B", "Z"];
let arr2 = ["Z", "X", "Y"];

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// filter() method creates a new array with all elements that pass the test implemented by the provided function.

// n is every element in the array
const intersection = arr1.filter((char) => arr2.includes(char));
//filter checks fn, return true value

console.log(intersection);

//is a linear function. O(n)

/////////////////////////////////////////////////
//https://leetcode.com/problems/intersection-of-two-arrays/submissions/

let nums1 = ["A", "B", "Z", "Z"];
let nums2 = ["Z", "X", "Y", "Z"];

var intersection = function (nums1, nums2) {
  const result = nums1.filter((char) => nums2.includes(char));
  //Set removes duplicates
  let uniq = [...new Set(result)];
  return uniq;
};

console.log(intersection(nums1, nums2));
