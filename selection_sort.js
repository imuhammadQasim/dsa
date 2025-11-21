// Selection Sort Algo find the lowest element and move it to the front of the array 
// key terminologies 
// 1. iterate on each element 
// 2. find the lowest element in the array 
// 3. Keep the index or subscript of the array 
// 4. swap the lowest element with the first element 
// 5. repeat the process for the remaining elements

const arr = [64, 34, 25, 12, 22, 11, 90, 5]
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        minIndex = i
        for (let j =i+1; j <arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j ;
            }
        }
        if (minIndex !==i) {
            let temp = arr[i]
            arr[i] = arr[minIndex];
            arr[minIndex] = temp
        }
    }
    console.log(arr)
}

selectionSort(arr)