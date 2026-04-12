// nums = [2, 18, 11, 15, 7];
// target = 9;

// function twoSum(num, target) {
//   for (let i = 0; i < num.length; i++) {
//     for (let j = 0; j < num.length; j++) {
//       if (num[i] + num[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return "Not Found";
// }

// a = twoSum(nums, target);
// console.log(a);

// function reverseString(str) {
//   if (typeof str !== "string" || str.trim() === "") {
//     throw new Error("Please Enter Valid String");
//   }
//   let reverse = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
//     console.log("reverse is here ===>>", reverse);
//   }
//   return reverse;
// }

// let text = "hello";
// let r = reverseString(text);
// console.log(r);

// function palindormeCheck(str) {
//   if (typeof str !== "string" || str.trim() === "") {
//     throw new Error("Please Enter Valid String");
//   }

//   left = 0;
//   right = str.length - 1;

//   while (left > right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//   }
//   return true;
// }

// a = palindormeCheck("ollo0");
// console.log(a);

// function maximum(arr) {
//   if (!Array.isArray(arr)) {
//     return "Please Enter the Valid array";
//   }
//   max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // if (arr[i] > max) {
//     max += arr[i];
//     // console.log(max);
//     // }
//   }
//   return max;
// }

// arr = [1, 2, 3, 4, 5, 6, 1];
// max = maximum(arr);
// console.log(max);

// const arr = [1, 2, 4, 5];

// const missingNumber = (arr) => {
//   const n = arr.length + 1;

//   const expectedSum = (n * (n + 1)) / 2;

//   let i = 0;
//   let actualSum = 0;

//   while (i < arr.length) {
//     actualSum += arr[i];
//     i++;
//   }

//   return expectedSum - actualSum;
// };

// console.log(missingNumber(arr)); // 3

// function fizzBuzz() {
//   let output = [];
//   for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0) {
//       output.push("Fizz");
//     } else if (i % 5 === 0) {
//       output.push("Buzz");
//     } else {
//       output.push(i);
//     }
//   }
//   return output;
// }

// console.log(fizzBuzz());

// function searchAPI(query) {
//   try {
//     const resp = fetch("https://jsonplaceholder.typicode.com/todos/")
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//     console.log("resp is here ===>>", resp);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function debounce(fn, delay) {
//   let timer;

//   return function (...args) {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }

// const debouncedSearch = debounce(searchAPI, 500);

// document.querySelector("input").addEventListener("input", (e) => {
//   debouncedSearch(e.target.value);
//   //   searchAPI(e.target.value);
// });

// let para = document.getElementsByTagName("p");

// async function searchAPI(query) {
//   await fetch("https://jsonplaceholder.typicode.com/todos/2")
//     .then((resp) => resp.json())
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));
// }

// function debounce(fn, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }

// const debouncedSearch = debounce(searchAPI, 5000);

// document.querySelector("input").addEventListener("input", (e) => {
//   debouncedSearch(e.target.value);
// });
