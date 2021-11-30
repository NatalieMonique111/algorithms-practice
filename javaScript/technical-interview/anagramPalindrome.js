
//8)Anagram Palindrome. Palindromes are strings that read the same forwards and backwards: like racecar and mom abba
// Given a string of letters, return true if those letters can make a palindrome. 


function canRearrangeToPalindrome(str){
    var letterCounts = {};
    var letter;
    var palindromeSum = 0;
    for (var i = 0; i < str.length; i++) {
        letter = str[i];
        letterCounts[letter] = letterCounts[letter] || 0;
        letterCounts[letter]++;
    }
    for (var letterCount in letterCounts) {
        palindromeSum += letterCounts[letterCount] % 2;
    }

    return palindromeSum < 2;
}




