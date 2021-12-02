//Create a Vowel Dictionary

const vowelDictionary = (arr) => {
  const VOWEL_OBJ = {
    a: 0,
    e: undefined,
    i: "foobar",
    o: true,
    u: -1,
    y: [],
  };
  let counter = {};
  const added = arr.forEach((letter) => {
    //loops through array
    if (letter in VOWEL_OBJ) {
      //if letter is vowel, proceed. if letter is in hashmap, proceed.
      //if not, go to else {}
      if (letter in counter) {
        let currentCount = counter[letter]; //assigns value to variable
        counter[letter] = currentCount + 1; //increments
      } else {
        //initlizes counter aka initially populates the hashmap
        counter[letter] = 0; // {a:0}
        counter[letter] += 1; //{a:1}  //adds letter as key, assigns value of 1
      }
    }
  });
  return counter;
};

vowelDictionary(["a", "b", "e", "d", "e", "f", "u", "i", "x", "a"]);

//notes:
//  let counter = {a:2, e:2, u:1, i:1 }   initial value is empty hashmap
// letter = "a"
//let currentCount = 1;
//count[letter] = (currentCount = 1) + 1
