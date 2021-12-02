//https://www.rcsdk12.org/cms/lib/NY01001156/Centricity/Domain/4951/Head_First_Java_Second_Edition.pdf
public class Shuffle1 {
 public static void main(String[] args){
   int x = 3;
   while (x > 0) {
    if (x > 2){
      System.out.print("a");
    }
    if ( x == 2 ) {
      System.out.print("b c");
    }
    x = x - 1;
      System.out.print("-");
      
    if (x == 1) {
      System.out.print("d");
      x = x - 1;
      }
     
   }
 }

}