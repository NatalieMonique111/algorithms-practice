public class Beers {
  public static void main(String[] bottles) {
    // declare number of beers
    int minBottles = 0;
    int x = 99;
    // use for loop to loop through string
    while (x > minBottles) {
        if (x > 1) {
            // condition to check if bottle is less than maxBottles
            System.out.println(x + " bottles of beer on the wall ..." + " " + x + " bottles of beer.");
            System.out.println("Take one down and pass it around," + (x - 1) + "bottles of beer on the wall.");
        } else {
            System.out.println(x + " bottle of beer on the wall ..." + " " + x + " bottle of beer.");
            System.out.println("Take one down and pass it around...there are no more bottles of beer on the wall!");
        }
        x = x - 1;
    }
}
}