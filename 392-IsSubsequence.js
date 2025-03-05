// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

function isSubsequence(s,t) {

    s = s.replace(/\s+/g, "").toLowerCase();
    t = t.replace(/\s+/g, "").toLowerCase();
    
    s = s.split("");
    t = t.split("");
    
    let index = 0;
    
    for(let i=0; i<t.length; i++){
            if(t[i] === s[index]){
                index++;
            }
            if(index === s.length) {
                break;
            }
        }
    return index === s.length;

};

let s = "abc";
let t = "ahbgdc";
console.log(isSubsequence(s,t));