class SimpleDotCom {
  //DECLARE an int array to hold the location cells. Call it locationCells
   int [] locationCells;

   //DECLARE an int to hold the number of hits. Call it numOfHits and SET it to 0.
  //numOfHits  how many times a user hits the battleship
   int numOfHits = 0;

  //DECLARE a checkYourself() method that takes a String for the user's guess ("1", "3", etc.),
  //checks it, and returns a result representing a "hit", "miss", or "kill".
  String checkYourself(String guess){
      //convert user guess to an int
    int convertedGuessInt = Integer.parseInt(guess);
      int [] cellLocations1 = new int [3];
          cellLocations1[0] = 2;
          cellLocations1[1] = 3;
          cellLocations1[2] = 4;
          //repeat with each of the location cells in the int array
      for(int i = 0; i < cellLocations1.length; i = i + 1 ){
          //compare the user guess to the location cell
          if(convertedGuessInt == cellLocations1[i]){
          //if user guess matches, increment the number of hits
              numOfHits = numOfHits + 1;
              if(convertedGuessInt == cellLocations1.length - 2){
                  return "kill";
              } else {
                  return "hit";
              }
          }
           else {
              return "miss";
          }
    };
      return "play again";
};
  /*
   DECLARE a setLocationCells() setter method that takes an int array (which has the three cell)
   locations as ints (2,3,4, etc.).
   */
  void setLocationCells(int[] cellLocations) {
      cellLocations = locationCells;
  }
}

class SimpleDotComTestDrive {
   public static void main(String [] args) {
    SimpleDotCom []  ship = new SimpleDotCom[3];
    int[] location = {1, 2, 3};
    String userGuess = "2";
    ship.checkYourself(userGuess);
}

}