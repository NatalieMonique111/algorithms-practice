
//create class called SleepIn
public class SleepIn {
    
    // create method on class called setClock
    void setClock(boolean weekday, boolean vacation) {
        if (!weekday || vacation) {
            System.out.println(true);
        } else {
            System.out.println(false);
        }
    }

    // create main method and create new object called 'one' using SleepIn class
    public static void main(String[] args) {
        SleepIn one = new SleepIn();
        // call setClock method on one object with different values to get result
        one.setClock(false, false); // true
        one.setClock(true, false); // false
        one.setClock(false, true); // true
    }
}
// //create class called SleepIn
// public class SleepIn {
// // printSleepIn method
// public boolean printSleepIn(boolean weekday, boolean vacation) {
// if (!weekday || vacation) {
// return true;
// } else {
// return false;
// }
// }

// public static void main(String[] args) {
// // create object called result
// SleepIn result = new SleepIn();
// // calling printSleepIn method on result instance/object
// System.out.println(result.printSleepIn(false, false));
// System.out.println(result.printSleepIn(true, false));
// System.out.println(result.printSleepIn(false, true));
// }
// }

// 1.I created a class called SleepIn
// 2.Created a method on that Class called setClock
//     a. used the logic code inside that method
// 3. Created a main block, and inside that block created a new Object called ‘one’ using the SleepIn class
// 4. Called the setClock method on one with different values to get result