// 8. Remove the spaces found in a string
// Yet another way to clean up data is to remove any errors or unnecessary spaces. This function will take in a string and then return it with all spaces removed. Think about if you were tasked with cleaning up customer data at your job. You could scale this function to clean up specific fields of data, such as zip codes.

function removeSpaces(str) {
  let newStr = str.replace(/\s/g, "");
  return newStr;
}

console.log(removeSpaces("Happy Birthday!"));
