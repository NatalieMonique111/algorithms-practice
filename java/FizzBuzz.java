public class FizzBuzz {
  public static void main(String[] args){
    int i = 1;
    while (i <= 100) {
      if (i % 15 == 0) {
      System.out.println(i + " FizzBuzz");
      } else if (i % 5 == 0) {
        System.out.println(i + " Buzz");
      } else if (i % 3 == 0) {
        System.out.println(i + " Fizz");
      } else {
      System.out.println(i);
      }
      i++;
    }
  }
}
