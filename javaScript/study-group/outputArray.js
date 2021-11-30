//  [[5, ON], [7, OFF], [30, ON], [31, OFF], [36, ON]]
//  [[0, 1],   [0, 1],   [0, 1],   [0, 1],    [0, 1]] //// sub-array indices

//input: [[5, ON], [7, OFF], [30, ON], [31, OFF], [36, ON]] /// [37, OFF] ////
// output: [[5,7], [30,31]]

/////////////// NOT CHECKING FOR ON/OFF ///////////////////////
const ON = "ON";
const OFF = "OFF";
function determineSwitchOff(input) {
  //create an output variable to store the "off value" arrays
  let outputArray = [];
  console.log(input.length);
  if (input.length % 2 === 1) {
    input.pop();
  }
  console.log("after pop:>>", input.length);
  for (let i = 0; i < input.length; i += 2) {
    outputArray.push([input[i][0], input[i + 1][0]]);
    // outputArray.push([input[i][0]]);
  }
  console.log("final output?: >>", outputArray);
}
determineSwitchOff([
  [5, ON],
  [7, OFF],
  [30, ON],
  [31, OFF],
  [36, ON],
  [100, OFF],
]);
// output: [[5,7], [30,31]]

/////////////// CHECKING FOR ON/OFF ///////////////////////

//  [[5, ON], [7, OFF], [30, ON], [31, OFF], [36, ON]]
//  [[0, 1],   [0, 1],   [0, 1],   [0, 1],    [0, 1]] //// sub-array indices
//input: [[5, ON], [7, OFF], [30, ON], [31, OFF], [36, ON]] /// [37, OFF] ////
// output: [[5,7], [30,31]]

const ON = "ON";
const OFF = "OFF";
function determineSwitchOff(input) {
  //create an output variables to store the "ON, OFF and COMBINED value" arrays
  let outputArrayON = [];
  let outputArrayOFF = [];
  let combinedOutputArray = [];
  // looping through the input array to ...
  for (let i = 0; i < input.length; i++) {
    // remove straggler input elements that would create 'undefined' results
    if (input.length % 2 === 1) {
      input.pop();
    }
    //pushing 'ON's to the ON array
    if (input[i][1] === ON) {
      outputArrayON.push(input[i][0]);
    }
    //pushing 'OFF's to the OFF array
    if (input[i][1] === OFF) {
      outputArrayOFF.push(input[i][0]);
    }
    console.log("outPutArray ON >>", outputArrayON);
    console.log("outPutArray OFF >>", outputArrayOFF);
  }
  // then we combining the ON's and OFF's into the COMBINED array
  for (let i = 0; i < outputArrayOFF.length; i++) {
    combinedOutputArray.push([outputArrayON[i], outputArrayOFF[i]]);
  }
  return combinedOutputArray;
}
determineSwitchOff([
  [5, ON],
  [7, OFF],
  [30, ON],
  [31, OFF],
  [36, ON],
]);
//  determineSwitchOff([[5, ON], [7, OFF], [30, ON], [31, OFF], [36, ON], [100, ON]]);
// output: [[5,7], [30,31]]
//// we know what the output needs to be, so we have a forced solution; however, may not work when don't know what the length array is.  Solution is to sanitize straggler array elements through the slice method ... but that is for another day
