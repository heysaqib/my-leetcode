//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
    let indices = [];
    for(i=0; i<nums.length;i++) {
        for(j=1;j<nums.length;j++) {
            if((nums[i]+nums[j] === target) && i != j) {
                if(indices.length === 0){
                    indices.push(i);
                    indices.push(j);
                }
                break;
            }
        }
    }
    return indices;
};

let nums = [2,7,11,15];
let target = 9;

twoSum(nums,target);