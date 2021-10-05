//The parameter weekday is true if it is a weekday, 
//and the parameter vacation is true if we are on vacation.
// We sleep in if it is not a weekday or we're on vacation. 
// Write a function that returns true if we sleep in.

function sleep_in(week_day, on_vacation){

  if (week_day === false || on_vacation === true) {
      return true; 
  }
  return false;
}




//sleep_in(false, false) → true
//sleep_in(true, false) → false
//sleep_in(false, true) → true
