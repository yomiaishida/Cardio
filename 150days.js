// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

var containsDuplicate = function(nums) {
   
    let sortedArr = nums.sort((a, b) => a-b)
    console.log(sortedArr)
    let val;
    // console.log(sortedArr.length)
    while(sortedArr.length > 0) {
        
        if(val === sortedArr[sortedArr.length-1]) {
            return true
        }
        val = sortedArr.pop()
        console.log(sortedArr)
    }
        return false
};