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
// FCC steamrollArray Solution
function steamrollArray(arr) {
  let flatten = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten.push(...steamrollArray(arr[i]));
    } else {
      flatten.push(arr[i]);
    }
  }
  return flatten;
}

steamrollArray([1, [2], [3, [[4]]]]);

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

// function sortByHeight(a) {
//   const arr1 = [];
//   const arr2 = [];

//   a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));

//   const sortArr = arr2.sort((a, b) => a - b);

//   arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

//   return sortArr;
// }

// const a = [-1, 150, 190, 170, -1, 160, 180];

// function missingLetters(str) {
//   let compare = str.charCodeAt(0);
//   let missing;

//   str.split("").map((_char, i) => {
//     if (str.charCodeAt(i) == compare) {
//       ++compare;
//     } else {
//       missing = String.fromCharCode(compare);
//     }
//   });

//   return missing;
// }

// console.log(missingLetters("cdefik"));

function evenOddSums(arr) {
  let even = 0;
  let odd = 0;

  arr.forEach((num) => (num % 2 == 0 ? (even += num) : (odd += num)));

  let total = [even, odd];

  return total;
}

// const output = letterChanges("Hello there");
console.log(evenOddSums([20, 20, 30, 15, 45]));

// FCC Search and replace
function searchNrep(str, before, after) {
  let newStr;
  let befIn = str.indexOf(before);
  let aftIn = after[0];
  if (str[befIn] == str[befIn].toUpperCase()) {
    aftIn = aftIn.toUpperCase();
    newStr = aftIn + after.slice(1);
  } else {
    aftIn = aftIn.toLowerCase();
    newStr = aftIn + after.slice(1);
  }
  return str.replace(before, newStr);
}

console.log(searchNrep("hello World, how's it going", "World,", "people"));

// FCC DNA PAIRING
function pairElement(str) {
  let splitted = str.split("");
  const twoDArr = [];
  splitted.map((char) => {
    switch (char) {
      case "G":
        twoDArr.push(["G", "C"]);
        break;
      case "C":
        twoDArr.push(["C", "G"]);
        break;
      case "A":
        twoDArr.push(["A", "T"]);
        break;
      case "T":
        twoDArr.push(["T", "A"]);
        break;
    }
  });
  console.log(twoDArr);
  return twoDArr;
}

pairElement("GCGTA");

// Missing Letters
function fearNotLetter(str) {
  let firstInd = str.charCodeAt(0);
  let missing;

  str.split("").map((_char, i) => {
    if (str.charCodeAt(i) == firstInd) {
      firstInd++;
    } else {
      missing = String.fromCharCode(firstInd);
    }
  });

  return missing;
}

fearNotLetter("fhij");

function uniteUnique(arr) {
  let arg = Array.from(arguments);
  let res = [].concat(...arg);
  return [...new Set(res)];
}

// Convert HTML Entities
console.log(uniteUnique([1, 3, 8], [5, 2, 1, 4], [2, 1]));
function convertHTML(str) {
  let nwstr = str;

  for (let i = 0; i < str.length; i++) {
    // console.log(str[i])
    if (str[i] == "&") {
      nwstr = nwstr.replace("&", "&amp;");
      i++;
    }
    if (str[i] == "<") {
      nwstr = nwstr.replace("<", "&lt;");
      i++;
    }
    if (str[i] == ">") {
      nwstr = nwstr.replace(">", "&gt;");
      i++;
    }
    if (str[i] == '"') {
      nwstr = nwstr.replace('"', "&quot;");
      i++;
    }
    if (str[i] == "'") {
      nwstr = nwstr.replace("'", "&apos;");
      i++;
    }
  }

  console.log(nwstr);
  return nwstr;
}

// Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  let fib;
  let oddArr = [];

  if (num == 1) {
    return 1;
  } else fib = [0, 1];

  for (let i = fib.length; i < num + 1; i++) {
    console.log(i);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  fib.map((fi) => {
    if (fi <= num && fi % 2 !== 0) {
      oddArr.push(fi);
    }
  });
  console.log(fib);
  const add = (a, b) => a + b;
  const sum = oddArr.reduce(add);
  console.log(sum);
  return sum;
}

sumFibs(4);

// FCC Sum All Primes
function sumPrimes(num) {
  let primes = [];
  for (var n = 3; n <= num; n += 2) {
    if (
      primes.every(function (prime) {
        return n % prime != 0;
      })
    ) {
      primes.push(n);
    }
  }
  primes.unshift(2);
  let sum = primes.reduce((a, b) => a + b);
  console.log(sum);
  console.log(primes);
  return sum;
}

sumPrimes(977);

// FCC Drop it Algorithm
function dropElements(arr, func) {
  let nArr = [];
  let another = [];
  let res = arr.filter((num) => {
    if (func(num) == !true && !nArr.includes(num)) {
      nArr.push(num);
    } else {
      another.push(num);
      console.log(another);
    }
  });
  console.log(another);
  return another;
}

dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});

// FCC Binary Agent
function binaryAgent(str) {
  let split = str
    .split(" ")
    .map((num) => String.fromCharCode(parseInt(num, 2)))
    .join("");
  console.log(split);
  return split;
}

binaryAgent(
  "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"
);

// FCC Everything Be True
function truthCheck(collection, pre) {
  return collection.every((col) => (col[pre] ? true : false));
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
);

// FCC Make A Person
var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullname = firstAndLast;
  this.getFullName = function () {
    // console.log(firstAndLast)
    fullname = firstAndLast;
    return fullname;
  };
  this.getFirstName = function () {
    let firstname = fullname.split(" ").slice(0, 1).join("");
    return firstname;
  };
  this.getLastName = function () {
    let lastname = fullname.split(" ");
    return lastname[1];
  };
  this.getFullName = function () {
    return fullname;
  };
  this.setFirstName = function (first) {
    let sefirst = fullname.split(" ").slice(0, 1).join("");
    fullname = fullname.replace(sefirst, first);
    return fullname;
  };
  this.setLastName = function (last) {
    let setlast = fullname.split(" ").slice(1).join("");
    fullname = fullname.replace(setlast, last);
    return fullname;
  };
  this.setFullName = function (newName) {
    return (fullname = newName);
  };
};

var bob = new Person("Bob Ross");
console.log(bob.setLastName("Rock"));
bob.getFirstName();
bob.getLastName();
bob.getFullName();
bob.setFirstName("first");
bob.setLastName("last");
bob.setFullName("first Last");

// FCC Project: Palindrome Checker
function palindrome(str) {
  let alphabetRegex = /[A-Za-z0-9]+/gi; // Change this line
  let result = str.match(alphabetRegex);
  let testAr = result.join("").split("").reverse().join("").toLowerCase();
  let joinedRes = result.join("").toLowerCase();
  console.log(testAr);
  return joinedRes === testAr ? true : false;
}

palindrome("My age is 0, 0 si ega ym.");
palindrome("0_0 (: /- :) 0-0");
palindrome("1 eye for of 1 eye.");
palindrome("five|_/|four");

// FCC Project: Phone Number Validator
function telephoneCheck(str) {
  console.log(str[0].replace(/[^-]/g, "").length);
  if (
    str.replace(/[^-]/g, "").length > 2 ||
    str[0].replace(/[^-]/g, "").length === 1
  ) {
    return false;
  }

  let polish = str.replace(/-| /g, "");
  if (polish.length === 10) {
    return true;
  } else if (polish.length === 11 && polish[0] === "1") {
    return true;
  } else if (polish[0] === "(" && polish[4] === ")" && polish.length === 12) {
    return true;
  } else if (polish[0] === "1" && polish[1] === "(" && polish[5] === ")") {
    return true;
  }
  return false;
}

telephoneCheck("-1 (757) 622-7382");
telephoneCheck("1 555)555-5555");
telephoneCheck("1 555)555-5555");

// Codility Binary Gap Algorithm
function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let len = 0;
  let result;
  let bin = N.toString(2);
  if (bin[0] === "1" && bin.match(/0+1/gm)) {
    result = bin.match(/0+1/gm);
    for (let i = 0; i < result.length; i++) {
      if (result[i].length > len) {
        len = result[i].length - 1;
      }
    }
  } else {
    len = 0;
    return len;
  }

  return len;
}
solution(32);
solution(15);
solution(1041);

// Codility Cyclic Rotation
function cyclicRotation(arr, k) {
  let end = arr[arr.length - 1];
  while (k > 0) {
    arr.unshift(end);
    arr.pop();
    end = arr[arr.length - 1];
    k--;
  }
  return arr;
}

cyclicRotation([3, 8, 9, 7, 6], 6);

// Codility - OddOcurrencesInArray
function oddOcurrencesInArray(A) {
  // const firstNumber = A[0]
  // let counter = 0
  // const sortedList = A.sort((a, b) => a-b)
  //    // console.log(sortedList)

  // sortedArr.map((num) => {
  //       if(num === firstNumber) {
  //           counter+1
  //       }

  //       if(counter % 2 === 0) {
  //     sortedArr.splice(0, counter-1)
  //     console.log(sortedArr)
  //   } else if(counter % 2 !== 0) {
  //   }
  //     odd = sortedArr[0]

  // })

  // return odd

  // Multiple pointer parttern
  let sorted = A.sort((a, b) => a - b);
  let left = 0;
  let next = 1;
  while (next <= A.length - 1) {
    if (A[left] !== A[next]) return A[left];
    left = next + 1;
    next = next + 2;
  }
  return A[A.length - 1];
}

oddOcurrencesInArray([1, 1, 2, 2, 3, 5, 5, 2, 2, 6, 6, 100, 100]);
