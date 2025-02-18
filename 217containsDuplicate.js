//Approach using sorting
    var containsDuplicate = function(nums) {
        nums.sort();
        for (let i = 0; i <= nums.length-1; i++) {
                if (nums[i] == nums[i+1]) {
                    return true; //duplicate found
                }
        }
        return false; //no duplicates found
    };

    let nums = [1,2,3,1];
    containsDuplicate(nums);


//Approach using Hashset
    var containsDuplicate = function(nums) {
        let seen = new Set();
        for (let num of nums) {
            if(seen.has(num)) {
                return true;//duplicate found
            }
            seen.add(num);
        }
        return false; //no duplicates found


    };

    let nums1 = [1,2,3,1];
    containsDuplicate(nums1);