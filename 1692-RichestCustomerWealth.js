//You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

function maximumWealth(accounts) {
    return Math.max(...accounts.map(customer => customer.reduce((sum, bank) => sum + bank, 0)));
}

let accounts = [[1, 2, 3], [3, 2, 1]];
console.log(maximumWealth(accounts)); // Output: 6