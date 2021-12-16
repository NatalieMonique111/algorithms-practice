// Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. E.g
// chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// // should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]

const chunkArray = (arr, chunkSize) => {
  const newChunkArray = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    let slicedArr = arr.slice(i, i + chunkSize);
    newChunkArray.push(slicedArr);
  }

  return newChunkArray;
};
chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5);
