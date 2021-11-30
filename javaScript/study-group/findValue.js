const faveAuthor = {
  name: "Mark Twain",
  book: "Connecticut Yankee",
  character: "Yankee",
};

arrayOfValues = ["alley", "tomb", "Yankee"];

// // create a function that checks to see if a given array has at least one of the values from a given object
function findValue(arr, obj) {
  for (let foobar in obj) {
    console.log(foobar);
    if (arr.indexOf(obj[foobar]) >= 0) {
      return true;
    }
  }
  return false;
}

findValue(arrayOfValues, faveAuthor);

// Please note that we intentionally named the value "foobar" to demonstrate that it can be called anything and it helped to demonstrate the concept of declaring a value on the spot.
// So in this case "foobar" is the variable that is declared on the spot in the "for" statement and the iteration is applied to the object, which in this case is becomes the iterable object declared above the function in faveAuthor.
