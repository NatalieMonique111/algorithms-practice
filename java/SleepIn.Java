public class SleepIn {
  public boolean printSleepIn(boolean weekday, boolean vacation) {
      if (!weekday || vacation) {
          return true;
      } else {
          return false;
      }
  }
  public static void main(String[] args) {
      SleepIn result = new SleepIn();
      System.out.println(result.printSleepIn(false, false));
  }
}

// 1.I created a class called SleepIn
// 2.Created a method on that Class called setClock
//     a. used the logic code inside that method
// 3. Created a main block, and inside that block created a new Object called ‘one’ using the SleepIn class
// 4. Called the setClock method on one with different values to get result