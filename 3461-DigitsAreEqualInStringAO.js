//You are given a string s consisting of digits. Perform the following operation repeatedly until the string has exactly two digits:

// For each pair of consecutive digits in s, starting from the first digit, calculate a new digit as the sum of the two digits modulo 10.
// Replace s with the sequence of newly calculated digits, maintaining the order in which they are computed.
// Return true if the final two digits in s are the same; otherwise, return false.

var hasSameDigits = function(s) {
    while (s.length > 2) {
        let newS = "";
        for (let i = 0; i < s.length-1; i++) {
            let sum = (parseInt(s[i]) + parseInt(s[i + 1])) % 10;
            newS += sum;
        }
        s = newS;
    }
    return s[0] === s[1];
};

let s = "3902";
console.log(hasSameDigits(s));