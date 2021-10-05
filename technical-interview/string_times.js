//Given a string and a non-negative int n, return a larger string that is n copies of the original string.

///////WITH BUILT IN METHOD////////
function string_times(n,int){
  return int > 0 ? n.repeat(int) : "";
}


////////////////////////////////////
function string_times(n, int) {
   // Step 1. Create an empty string that will host the repeated string
  var repeatedString = "";
   // Step 2. Set the While loop with (times > 0) as the condition to check
  while (int > 0) {
     // The statement
    repeatedString += n;
    int--; // Same as times = times - 1;
  }
  
  // Step 3. Return the repeated string
  return repeatedString;
}

  /* While loop logic
                      Condition       T/F       repeatedString += n     repeatedString        int
    First iteration    (3 > 0)        true            "" + "abc"                  "abc"               2
    Second iteration   (2 > 0)        true           "abc" + "abc"               "abcabc"             1
    Third iteration    (1 > 0)        true          "abcabc" + "abc"            "abcabcabc"           0
    Fourth iteration   (0 > 0)        false
    }
  */

console.log(string_times('Hi', 2));
//→ 'HiHi'
console.log(string_times('Hi', 3));
//→ 'HiHiHi'
console.log(string_times('Hi', 1)); 
//→ 'Hi'


