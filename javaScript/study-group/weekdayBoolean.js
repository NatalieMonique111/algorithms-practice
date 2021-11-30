function sleep_in(weekday, vacation) {
  if (weekday === false || vacation == true) {
    return true;
  } else {
    return false;
  }
}

function sleep_in(weekday, vacation) {
  return !weekday || vacation;
}

console.log(sleep_in(false, false)); //true

console.log(sleep_in(true, false)); //false
