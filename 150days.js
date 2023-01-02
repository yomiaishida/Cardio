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

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target && i !== j) {
                return [i, j]
            }
        }
    }
};

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
var isPalindrome = function(s) {
  let newS = s.toLowerCase()
  let nonAlphanum = /[^a-z0-9]/g
  newS = newS.replace(nonAlphanum, "")

  const revStr = newS.split("").reverse().join("")
  
return revStr === newS;
};

// you are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
var maxProfit = function (prices) {
  let min = prices[0];
  let max = min;
  let value = 0;
  for (let i = 0; i < prices.length; i++) {
      if (i != prices.length - 1 && prices[i] <= min) {
          max = min = prices[i];
      } else if (prices[i] > max) {
          max = prices[i];
      }
      value = max - min > value ? max - min : value;
  }
  return value;
};

// Day 6
var isValid = (s, stack = []) => {
  for (const bracket of s.split('')) {/* Time O(N) */
      const isParenthesis = bracket === '(';
      if (isParenthesis) stack.push(')');  /* Space O(N) */

      const isCurlyBrace = bracket === '{';
      if (isCurlyBrace) stack.push('}');   /* Space O(N) */

      const isSquareBracket = bracket === '[';
      if (isSquareBracket) stack.push(']');/* Space O(N) */

      const isOpenPair = isParenthesis || isCurlyBrace || isSquareBracket;
      if (isOpenPair) continue;

      const isEmpty = !stack.length;
      const isWrongPair = stack.pop() !== bracket;
      const isInvalid = isEmpty || isWrongPair;
      if (isInvalid) return false;
  }

  return (stack.length === 0);
};
