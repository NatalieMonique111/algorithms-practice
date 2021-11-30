//Create a length converter function
// Creating a function is a skill that'll be useful in many settings, and as you progress, you'll be working on much more complicated functions than this one. But a function that converts units of measure can be pretty handy in multiple professions and industries.
// Let's start with a conversion from kilometers to miles. The function should include the input in kilometers and return the answer in miles.
//km to miles
//input will be km and the return will be miles
const unitConverter = (km) => {
  //km to miles multiply km * .62
  //could use Math.floor or Math.ceil to round up or down
  let miles = Math.floor(km * 0.62);
  return miles;
};
//1km is .62 miles
console.log(unitConverter(10)); //6.2
