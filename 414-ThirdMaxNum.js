// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

var thirdMax = function(nums) {
    nums = [...new Set(nums)];
    nums.sort((a, b) => b - a);
    if(nums.length >= 3){
        return nums[2];
    }
    else {
        return nums[0];
    }
};

let nums = [3,2,1];
console.log(thirdMax);