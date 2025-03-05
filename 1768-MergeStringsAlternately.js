//You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

//Return the merged string.

var mergeAlternately = function (word1, word2) {
    word1 = word1.split("");
    word2 = word2.split("");
    let newWord = [];
    let n = 0;
    if (word1.length > word2.length) {
        n = word1.length;
    }
    else {
        n = word2.length;
    }
    for (let i = 0; i < n; i++) {
        newWord.push(word1[i]);
        newWord.push(word2[i]);
    }
    newWord = newWord.join("");
    return newWord;
};

let word1 = "abc";
let word2 = "pqr";
mergeAlternately(word1, word2);