// function doesOverlap(min1, max1, min2, max2) {

// ///create a condition that compares mins and maxes

//   if ((min1 <= min2) && (max1 >= min2)) {

//     return true;
//   }
//   // else if ((min1 <= min2) && (max1 <= min2)) {

// return false;
//   // }
// };

function doesOverlap(tuple1, tuple2) {
  ///create a condition that compares mins and maxes

  if (tuple1[0] <= tuple2[0] && tuple1[1] >= tuple2[0]) {
    return true;
  }
  // else if ((min1 <= min2) && (max1 <= min2)) {

  return false;
  // }
}

console.log(doesOverlap([1, 3], [2, 4])); // return -> true
console.log(doesOverlap([2, 3], [4, 5])); // return -> false
console.log(doesOverlap([1, 5], [2, 3])); // return -> true
