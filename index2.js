// JavaScript Materclass

// Time Coomplexity
// Add up to n 1
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

// Add up to n 2
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

// O(n²)
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// Space Complexity
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

double([2, 3, 4]);

// Problem solving aproach
function charCount(str) {
  // do something
  // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters
}

// function charCount(str) {
//   // make object to return at end
//   var result = {};
//   // loop over string, for each character...
//   for (var i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();
//     // if the char is a number/letter AND is a key in object, add one to count
//     if (result[char] > 0) {
//       result[char]++;
//     }
//     // if the char is a number/letter AND not in object, add it and set value to 1
//     else {
//       result[char] = 1;
//     }
//   }
//   // if character is something else (space, period, etc.) don't do anything
//   // return object at end
//   return result;
// }

function charCount(str) {
  var obj = {};
  for (var char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // numeric (0-9)
    !(code > 96 && code < 123)
  ) {
    return false; // lower alpha (a-z)
  }
  return true;
}

// Problem solving patterns
// Frequency Counter
function same(arr1, arr2) {
  let sort1 = arr1.sort();
  let sort2 = arr2.sort();
  let sq = [];
  if (sort1.length !== sort2.length) {
    return false;
  }
  sort2.map((num) => {
    sq.push(Math.sqrt(num));
  });
  const isEqual =
    sort1.length === sq.length && sort1.every((val) => sq.includes(val));
  return isEqual ? true : "Arrrgg";
}

same([1, 2, 3, 4], [4, 1, 9]);
same([1, 2, 3], [4, 1, 9]);

// Frequency counter refactor
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);

// isAnagram
function isAnagram(a, b) {
  let arr1 = {};
  let arr2 = {};

  for (let val of a) {
    arr1[val] = (arr1[val] || 0) + 1;
  }

  for (let val of b) {
    arr2[val] = (arr2[val] || 0) + 1;
  }

  if (a.length !== b.length) {
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
}

isAnagram("anan", "anna");

// Code Refactor: isAnagram
function isAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an isAnagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

isAnagram("anagram", "nagaram");

// Multiple Pointers O(N^2)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);

// Multiple Pointers refactor O(N)
function sumZero1(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero1([-4, -3, -2, -1, 0, 3, 5, 10]);

// Multiple Counters: Unique values solution
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// max_sum
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// max_sum refactor with Sliding Window
function maxSubarraySum1(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

// Recursive Functions
function counDown(num) {
  if (num <= 0) {
    return;
  }
  console.log(num);
  num--;
  counDown(num);
}

counDown(6);

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

sumRange(4);

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

factorial(2);

// Helper Method Recursion
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

collectOddValues2([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Pure Recursion
function collectOddValues2(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues2([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Linear Search example
function linear(arr, val) {
  // let res;
  // if(arr.indexOf(val) === -1) {
  //     return -1
  // }

  // const ma = arr.map((num) => {
  //     if(num == val) {
  //         res = arr.indexOf(val)
  //     }
  // })

  // return res

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

linear([1, 3, 2, 5, 6], 9);

// Binary Search
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.round((left + right) / 2);

  if (arr[middle] === val) return middle;

  while (arr[middle] !== val && left <= right) {
    if (arr[middle] > val) right = middle - 1;
    else left = middle + 1;
    middle = Math.round((left + left) / 2);
  }

  return arr[middle] === val ? middle : -1;
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8);

// Naive String Search
function naiveSearch(str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str2[j] !== str1[i + j]) break;
      if (j === str2.length - 1) {
        count++;
      }
    }
  }
  return count;
}

naiveSearch("wowlowowlol", "wow");

// Naive Bubble Sort
function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      // console.log(arr, arr[j], arr[j+1])
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

bubbleSort([2, 5, 6, 3]);

// Optimized Bubble Sort
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      // console.log(arr, arr[j], arr[j+1])
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([2, 5, 6, 3]);

// Optimized Bubble Sort with noSwaps
function bubbleSort(arr) {
  let noSwaps;
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([2, 5, 6, 3]);

// Selection Sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      console.log(i, min);
      let swapped = ([arr[i], arr[min]] = [arr[min], arr[i]]);
    }
  }
  return arr;
}

selectionSort([9, 4, 2, 7, 6]);

// Insertion Sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 78, 5]);

// Merge Two Sorted Arrays
function merge(arr1, arr2) {
  let results = [];
  let firstArrIndex = 0;
  let secondArrIndex = 0;

  while (firstArrIndex < arr1.length && secondArrIndex < arr2.length) {
    if (arr2[secondArrIndex] > arr1[firstArrIndex]) {
      results.push(arr1[firstArrIndex]);
      firstArrIndex++;
    } else {
      results.push(arr2[secondArrIndex]);
      secondArrIndex++;
    }
  }
  while (firstArrIndex < arr1.length) {
    results.push(arr1[firstArrIndex]);
    firstArrIndex++;
  }
  while (secondArrIndex < arr2.length) {
    results.push(arr1[secondArrIndex]);
    secondArrIndex++;
  }
  return results;
}

merge([1, 10, 50], [2, 14, 99, 100]);

// Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([24, 10, 43, 33]);

// Quick Sort Pivot Helper Function
function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

pivot([3, 4, 2, 1, 5, 9, 7]);

// Quick Sort
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([4, 6, 9, 1, 2, 5, 3]);

// Radix Sort Helper Functions
function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// Radix Sort Function
function radixSort(arr) {
  let getMaxDigits = mostDigits(arr);
  for (let i = 0; i < getMaxDigits; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      digitBuckets[digit].push(arr[j]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
}

radixSort([23, 234, 2345]);
