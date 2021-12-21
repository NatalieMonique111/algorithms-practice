// Given two or more arrays, write a function that combines their elements into one array without any repetition.

// E.g.
// mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]

////////ONE-LINER //////////////////

function removeDuplicates(arr1, arr2) {
  let data = arr1.concat(arr2);
  console.log(_.uniq((data, false)));
}

console.log(removeDuplicates([1, 2, 3, 3, 3], [1, 4, 5, 2]));

/////////REDUCE METHOD ///////////

// function removeDuplicates(arr1, arr2) {

//   let data = arr1.concat(arr2);
//  //comparing two indices next to eachother, if they're unique if it is not -1 and does not exist already, push it to the unique
//   let unique = data.reduce(function (a, b) {
//     if (a.indexOf(b) < 0) a.push(b);
//     return a;
//     }, []);
//   return unique;
// }

// console.log(removeDuplicates([1,2,3,3,3], [1,4,5,2]))

///////// FOREACH METHOD /////////
// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

// function removeDuplicates(arr1, arr2) {
//   let uniqueSet = [];
//   let data = arr1.concat(arr2);
//   data.forEach(element => {
//     //container array not include element we're looking at, push it into the holding container
//     if (!uniqueSet.includes(element)) {
//       uniqueSet.push(element)
//     }
// });

// return uniqueSet;
// }

// console.log(removeDuplicates([1,2,3,3,3], [1,4,5,2]))

/////// FILTER AND INDEXOF METHOD ////////////

// const mergeArrays = (arr1, arr2) => {
//   //combining two arrays and hold it into a new array
//   let result = arr1.concat(arr2);
//     // let result2 = [...arr1, ...arr2];
//   console.log(result);

//   return result.filter((value, index) => result.indexOf(value) === index);

// }

// mergeArrays([1,2,3,3,3], [1,4,5,2,99]);

/////// Set Method ///////////

// let array1 = [1,2,3,3,3]
// let array2 = [1,4,5,2];
// // let array3 = array1.concat(array2);
// array3 = [...new Set([...array1,...array2])]
