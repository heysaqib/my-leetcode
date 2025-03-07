// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must be unique and you may return the result in any order.

var intersection = function(nums1, nums2) {
    nums1 = new Set(nums1);
    nums2 = new Set(nums2);
    
    let result = [...nums1].filter(num => nums2.has(num));
    return result;
};