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

// reverseString("hello");
// console.log(reverseString("racecar"));
console.log(isPalindrome("madam"));
