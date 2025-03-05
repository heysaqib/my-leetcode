// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    s = s.trim(); // Remove leading and trailing spaces
    let words = s.split(" "); // Split the string by spaces
    return words[words.length - 1].length; // Return the length of the last word
};

// Example usage:
console.log(lengthOfLastWord("Hello World")); // Output: 5