function repeatStr(str, num){
  let result = "";

  //loop through array; if the value of the current number is smaller then result, then replace result with that number. 

  for ( let i = 0; i < num; i++){
    result = result + str;
  }
  return result;
}

console.log(repeatStr("Hi", 4)); 
