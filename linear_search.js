//  Linear search is the Alogortihm that is used to search the specific element in the array the best case of Linear search is O(1) and the worst case of Linear Search is O(n) and the average case of Linear Search is sum of all possible searches 1+2+3+4...n/ n

let arr = new Array();
for (let i = 0; i < 10; i++) {
  let a = Math.floor(Math.random() * 10);
  arr.push(a);
}
console.log(arr);
function LinearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  console.log(arr);
  return -1;
}

console.log(LinearSearch(arr, 9));
