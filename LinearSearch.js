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
