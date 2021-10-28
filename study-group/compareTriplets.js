// Create a function called compareTriplets that compares the scores of two players
// each player had an array of scores, which are 3 long
// if arr1[0] > arr2[0] -> arr1 is winner
//[1, 2, 3] player 1
//[2, 3, 4] player 2
//comparing individual indices and taking the best of three
// compare each index of each array to get the result
function compareTriplets(arr1, arr2) {
  console.log(`compareTriplets(arr1=${arr1}, arr2=${arr2}) -->`);
  //create a counter for one player
  //create a counter for second player
  //if equal?  do nothing
  //use built-in methodology to compare index to index of each array
  //the result of which would be pushed into the appropriate player's array
  //compare the two counters
  //return the winner as a result
  let playerOne = 0;
  let playerTwo = 0;
  for (let i = 0; i < arr1.length; i++) {
    const A = arr1[i];
    const B = arr2[i];
    console.log(
      `A: --> i=${i}, A=${A}, B=${B}, playerOne=${playerOne}, playerTwo=${playerTwo}`
    );
    if (A > B) {
      //console.log(`B: --> i=${i}, A=${A}, B=${B}, playerOne=${playerOne}, playerTwo=${playerTwo}`)
      playerOne += 1;
      //console.log(`C: --> i=${i}, A=${A}, B=${B}, playerOne=${playerOne}, playerTwo=${playerTwo}`)
    } else if (A < B) {
      //console.log(`D: --> i=${i}, A=${A}, B=${B}, playerOne=${playerOne}, playerTwo=${playerTwo}`)
      playerTwo += 1;
      //console.log(`E: --> i=${i}, A=${A}, B=${B}, playerOne=${playerOne}, playerTwo=${playerTwo}`)
    }
    //console.log(`F: --> i=${i}, A=${A}, B=${B}, playerOne=${playerOne}, playerTwo=${playerTwo}`)
  }
  console.log(`G: --> playerOne=${playerOne}, playerTwo=${playerTwo}`);
  return [playerOne, playerTwo];
}

s;
console.log(compareTriplets([5, 2, 3], [2, 2, 4]));
