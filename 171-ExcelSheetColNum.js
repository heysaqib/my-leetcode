// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

function titleToNumber(columnTitle) {
    let result = 0;
    
    for (let i = 0; i < columnTitle.length; i++) {
        let charValue = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        result = result * 26 + charValue;
    }
    
    return result;
}

console.log(titleToNumber("A"));