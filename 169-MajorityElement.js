//Given an array nums of size n, return the majority element.
//The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



var majorityElement = function(nums) {
    let candidate = 0;
    let count = 0;
    
    for(let num of nums){
        if(count == 0){
            candidate = num;
            count = 1;
        }
        else if(num == candidate){
            count++;
        }
        else {
            count--;
        }
    }
    return candidate;
};