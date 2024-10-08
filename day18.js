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
function countCharacterOccurrences(str) {
    let counts = {};
    for (let char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }
    console.log("Character Counts: ", counts);
    return counts;
}

countCharacterOccurrences("hello world");

function longestSubstringWithoutRepeatingCharacters(s) {
    let seen = new Map();
    let start = 0, maxLength = 0;

    for (let end = 0; end < s.length; end++) {
        if (seen.has(s[end])) {
            start = Math.max(seen.get(s[end]) + 1, start);
        }
        seen.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    console.log("Longest Substring Length: ", maxLength);
    return maxLength;
}

longestSubstringWithoutRepeatingCharacters("abcabcbb");

//Activity: 4
//Array Algs
function rotateArray(arr, k) {
    k = k % arr.length;
    arr = arr.slice(-k).concat(arr.slice(0, -k));
    console.log("Rotated Array: ", arr);
    return arr;
}

rotateArray([1, 2, 3, 4, 5, 6, 7], 3);

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    console.log("Merged Array: ", mergedArray);
    return mergedArray;
}

mergeSortedArrays([1, 3, 5], [2, 4, 6]);
