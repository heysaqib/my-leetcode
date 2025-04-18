// Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.

var countPairs = function(nums, target) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if((nums[i]+nums[j]) < target) {
                count++;
            }
        }
    }
    return count;
};

let nums = [-1,1,2,3,1];
let target = 2;

countPairs(nums,target);