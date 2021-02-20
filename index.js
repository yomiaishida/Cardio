// JS Cadio
// reserveString()
// isPalindrome()
// reverseInt()
// maxCharacter()
// fizzBuzz()

function reverseString(str) {
  // const strArr = str.split("");
  // strArr.reverse();
  // let ans = strArr.join("");
  // return console.log(ans);

  /////////////////////////

  // return str.split("").reverse().join("");

  ////////////////////////

  // let revStr = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   revStr = revStr + str[i];
  //   console.log(str[i], i);
  //   console.log(revStr);
  // }

  // return revStr;

  /////////////////////

  // let revStr = "";
  // for (let i = 0; i <= str.length - 1; i++) {
  //   revStr = str[i] + revStr;
  //   console.log(str[i], i);
  //   console.log(revStr);
  // }

  // return revStr;

  /////////////////////

  // let revStr = "";
  // for (let char of str) {
  //   revStr = char + revStr;
  //   console.log(revStr);
  // }

  //////////////////////

  // let revStr = "";
  // str.split("").forEach((char) => {
  //   revStr = char + revStr;
  //   console.log(revStr);
  // });

  // return revStr;

  return str.split("").reduce((revStr, char) => {
    return char + revStr;
  }, "");
}

function isPalindrome(str) {
  // let reversed = str.split("").reduce((revStr, char) => {
  //   return char + revStr;
  // }, "");

  // if (reversed == str) {
  //   console.log("That's a palindrome");
  // } else {
  //   console.log("That's no palindrome");
  // }

  ///////////////////////

  // const revStr = str.split("").reverse().join("");

  // if (revStr == str) {
  //   return console.log("That's a palindrome");
  // } else {
  //   return console.log("That's no palindrome");
  // }

  ///////////////////////////

  const revStr = str.split("").reverse().join("");

  return revStr === str;
}

function reverseInt(int) {
  const revStr = int.toString().split("").reverse().join("");

  return parseInt(revStr) * Math.sign(int);
}

function capitalizeLetters(str) {
  // const strArr = str.toLowerCase().split(" ");

  // for (let i = 0; i < strArr.length; i++) {
  //   strArr[i] =
  //     strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  // }

  // return strArr.join(" ");

  ///////////////////////

  // return str
  //   .toLowerCase()
  //   .split(" ")
  //   .map((word) => word[0].toUpperCase() + word.substr(1))
  //   .join(" ");

  ///////////////////////

  return str.replace(/\b[a-z]/gi, function (char) {
    return char.toUpperCase();
  });
}

function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = "";

  str.split("").forEach((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    // debugger;
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function longestWord(sen) {
  // Create filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  // Sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);

  // If multiple words, put into array
  const longestWordArr = sorted.filter(
    (word) => word.length === sorted[0].length
  );

  // Check if more than one array val
  if (longestWordArr.length === 1) {
    // Return the word
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

function chunkArray(arr, len) {
  // SOLUTION 1
  // Init chunked arr
  // const chunkedArr = [];
  // // Set index
  // let i = 0;

  // // Loop while index is less than the array length
  // while (i < arr.length) {
  //   // Slice out from the index to the index + the chunk length and push to the chunked array
  //   chunkedArr.push(arr.slice(i, i + len));
  //   // console.log(i + len);
  //   // Increment by chunk length
  //   i += len;
  // }

  // return chunkedArr;

  // SOLUTION 2
  // Init chunked arrj
  const chunkedArr = [];

  // Loop through arr
  arr.forEach((val) => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];
    // console.log(val);

    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }

    console.log(last);
  });

  return chunkedArr;
}

function flattenArray(arrays) {
  // SOLUTION 1
  // return arrays.reduce((a, b) => {
  //   return a.concat(b);
  // });

  // SOLUTION 2
  // return [].concat.apply([], arrays);

  // SOLUTION 3
  return [].concat(...arrays);
}

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/a|e|i|o|u/gi, (vowel) => vowel.toUpperCase());

  return newStr;
}

// Solution - ES5 arguments & for loop
// function addAll() {
//   var args = Array.prototype.slice.call(arguments);
//   var total = 0;

//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }

// // Solution 2 - ...rest & reduce/forEach
// function addAll(...numbers) {
//   return numbers.reduce((acc, cur) => acc + cur);
// }

// function summAllPrimes(num) {
//   let total = 0;

//   function checkForPrime(i) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   for (let i = 2; i <= num; i++) {
//     if (checkForPrime(i)) {
//       total += i;
//     }
//   }
//   return total;
// }

// // Solution 1: arguments, indexOf, filter
// function seekAndDestroy(arr) {
//   const args = Array.from(arguments);

//   function filterArr(arr) {
//     // Return true if NOT in array
//     return args.indexOf(arr) === -1;
//   }

//   return arr.filter(filterArr);
// }

// Solution 2: ...rest, filter & includes
function seekAndDestroy(arr, ...rest) {
  return arr.filter((val) => !rest.includes(val));
}

// const output = letterChanges("Hello there");
console.log(seekAndDestroy([2, 4, 5, 6, 7, "hi"], 2, 6));
