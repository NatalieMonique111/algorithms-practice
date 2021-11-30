//Sort an Array of Numbers in descending order.

const sortArray = (array) => {
  return array.sort(function (a, b) {
    return b - a;
  });
};
console.log("result", sortArray([4.5, 70, -9, 100]));

//Sort an Array of Numbers in ascending order.

const sortArray = (array) => {
  return array.sort(function (a, b) {
    return a - b;
  });
};
console.log("result", sortArray([4.5, 70, -9, 100]));
