class Dog {
  int size;
  String breed;
  String name;
  //method
  void bark() {
  System.out.println("Ruff! Ruff!");
  }
 }

class DogTestDrive {
  public static void main (String[] args) {
  Dog d = new Dog();
  //set the size 
  d.size =40;
  //calling the method
  d.bark();
  }
 }