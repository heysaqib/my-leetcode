//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//Note that you must do this in-place without making a copy of the array.



var moveZeroes = function(nums) {
    let read_ptr =0;
    let write_ptr =0;
    
    for(read_ptr=0;read_ptr<nums.length;read_ptr++){
        if(nums[read_ptr]!=0){
            [nums[read_ptr],nums[write_ptr]]=[nums[write_ptr],nums[read_ptr]];
            write_ptr++;
        }
    }
    return nums;
};