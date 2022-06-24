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
