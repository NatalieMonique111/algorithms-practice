/////////////////DECLARATIVE -Finds common elements, DOES NOT REMOVE DUPLICATES-///////////////
//Notes:
// -The includes() method determines whether an array includes a certain value among its entries, returning true or false.
// -filter() method creates a new array with all elements that pass the test implemented by the provided function.
// -char is every element in the array
//-is a linear function. O(n)

let arr1 = ["A", "B", "Z", "Z"];
let arr2 = ["Z", "X", "Y", "Z"];

const intersection = arr1.filter((char) => arr2.includes(char));
console.log(intersection);

//////////////////////DECLARATIVE -Finds common element, REMOVES DUPLICATES- ////////////////////

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

////////////////////IMPERATIVE with for loop//////////////////
//Does NOT remove duplicates
function sameElements(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}

console.log(sameElements([1, 2, 3, 4], [3, 4, 5]));
