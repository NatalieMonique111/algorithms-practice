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
    // do something to each item
    //if the letter is in vowel_obj then...
    if (letter in VOWEL_OBJ) {
      // O(1)
      //then if letter in the counter... if not go to else {}
      if (letter in counter) {
        let currentCount = counter[letter];
        // console.log(counter)
        counter[letter] = currentCount + 1;
        //  console.log(letter + currentCount)
      } else {
        //initlizes counter
        counter[letter] = 0;
        //add 1 to the counter if letter is not in the counter
        counter[letter] += 1;
      }
    }
  });
  return counter;
};

vowelDictionary(["a", "b", "e", "d", "e", "f", "u", "i", "x", "a"]);
// expects { a: 2, e: 2, u: 1, i: 1 }
