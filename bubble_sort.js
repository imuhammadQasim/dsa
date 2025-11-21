let arr = [7, 12, 9, 11, 3];
function bubbleSort(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
        count++;
      }
    }
    if (!swapped) break;
  }
  console.log(arr);
  console.log("swapped count is :", count);
}

bubbleSort(arr);
