//Day: 18
//Algorithms

//Activity: 1
//Sorting
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log("Bubble Sort: ", arr);
}

bubbleSort([64, 34, 25, 12, 22, 11, 90]);

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    console.log("Selection Sort: ", arr);
}

selectionSort([64, 25, 12, 22, 11]);

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (i !== Math.floor(arr.length / 2)) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

let quickSortedArray = quickSort([10, 7, 8, 9, 1, 5]);
console.log("Quicksort: ", quickSortedArray);

//Activity: 2
//Searching
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log("Linear Search: Index of", target, "is", i);
            return i;
        }
    }
    console.log("Linear Search: Target not found");
    return -1;
}

linearSearch([2, 3, 4, 10, 40], 10);

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            console.log("Binary Search: Index of", target, "is", mid);
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    console.log("Binary Search: Target not found");
    return -1;
}

binarySearch([2, 3, 4, 10, 40], 10);

//Activity: 3
//String Algorithms

