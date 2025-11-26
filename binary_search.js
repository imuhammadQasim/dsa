const arr = [2, 3, 4, 5, 6, 7, 8, 9];

function BinarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  let count = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === key) {
      return console.log(
        `The Mid is located at ${mid}th index and the value is ${arr[mid]}`
      );
    } else if (arr[mid] > key) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
BinarySearch(arr, 9);
