//Given an array of integers, find the sum of its elements.

function simpleArraySum(ar) {
  // Write your code here
  const reducer = (prevVal, currVal) => prevVal + currVal;
  return ar.reduce(reducer); 

}