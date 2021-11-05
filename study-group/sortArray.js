//Sort an Array of Numbers

const sortArray = (array) => {
  return array.sort(function (a, b) {
    return b - a;
  });
};
console.log("result", sortArray([4.5, 70, -9, 100]));
