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

    while(sortedArr.length > 0) {
        
        if(val === sortedArr[sortedArr.length-1]) {
            return true
        }
        val = sortedArr.pop()
        console.log(sortedArr)
    }
        return false
};

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
var isAnagram = function(s, t) {
    let arr1 = {};
  let arr2 = {};

  for (let val of s) {
    arr1[val] = (arr1[val] || 0) + 1;
  }

  for (let val of t) {
    arr2[val] = (arr2[val] || 0) + 1;
  }

  if (s.length !== t.length) {
    return false;
  }
  for (let key in arr1) {
    if (!(key in arr2)) {
      return false;
    }
    if (arr1[key] !== arr2[key]) {
      return false;
    }
  }
  return true;
};