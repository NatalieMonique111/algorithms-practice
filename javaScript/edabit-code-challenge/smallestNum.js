//loop through array; if the value of the current number is smaller then result, then replace result with that number.

function smallestNum(arr) {
  let result = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < result) {
      result = arr[i];
    }
  }
  return result;
}

console.log(smallestNum([2, 3, 100]));
