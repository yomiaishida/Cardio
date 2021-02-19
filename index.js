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

const output = fizzBuzz();
console.log(output);
