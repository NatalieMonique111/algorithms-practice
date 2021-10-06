// Most used letter in a string
// https://stackoverflow.com/questions/22590023/finding-the-most-frequent-character-in-a-string-javascript

  /**
     * i.e. doggs
     * charMap = {
     * d: 1,
     * o: 1,
     * g: 2,
     * }
     *  
     * */ 
   function maxChar(str) {

    const charMap = {};
    let max = 0;
    let maxChar = '';

    for(let char of str){ // [d,o,g,g]
        if(charMap[char]){ // {d:1} is "d" in the map already?
            charMap[char]++; // increment the value,  
        }else{ // d is not in map, add it: {d: 1}
            // every char will be assigned value of 1 at first appearance
            charMap[char] = 1;
        }
    }

    for(let char in charMap){ // 'd', 'o', 'g'
        if(charMap[char] > max){ // compare each number, ie. 1 or 2
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar; 
}

maxChar('dogg');