/* Day 23: Leetcode Hard */
/* Activity 1: Median of two sorted arrays */

// Task 1: Solve the "Median of Two Sorted Arrays" problem on leetcode.
// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// Log the median for a few test cases, including edge cases.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const mergedArray = [...nums1, ...nums2];
    mergedArray.sort((a, b) => a - b);
  
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);
  
    if (mergedArray.length % 2 === 0) {
      return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
      return mergedArray[mid];
    }
  };
  
  // const nums1 = [1,3]
  // const nums2 = [2]
  
  const nums1 = [1, 2],
    nums2 = [3, 4];
  
  console.log(findMedianSortedArrays(nums1, nums2));
  
  /* Activity 2: Merge k sorted list */
  
  // Task 2: Solve the k merged sorted lists problem on leet code
  
  class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  var mergeKLists = function (lists) {
    if (lists.length === 0) return null;
  
    // Min-heap to keep track of the smallest node among the k lists
    const minHeap = new MinHeap((a, b) => a.val - b.val);
  
    // Initialize the heap with the head of each list
    for (let list of lists) {
      if (list !== null) {
        minHeap.insert(list);
      }
    }
  
    // Dummy head to help with the result list
    let dummyHead = new ListNode(0);
    let current = dummyHead;
  
    // Extract the smallest node from the heap and add it to the result list
    while (!minHeap.isEmpty()) {
      let smallestNode = minHeap.extract();
      current.next = smallestNode;
      current = current.next;
  
      // If there is a next node in the list, add it to the heap
      if (smallestNode.next !== null) {
        minHeap.insert(smallestNode.next);
      }
    }
  
    return dummyHead.next;
  };
  
  // MinHeap class implementation
  class MinHeap {
    constructor(compare) {
      this.heap = [];
      this.compare = compare;
    }
  
    insert(node) {
      this.heap.push(node);
      this.bubbleUp(this.heap.length - 1);
    }
  
    extract() {
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown(0);
      return root;
    }
  
    bubbleUp(index) {
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        if (this.compare(this.heap[index], this.heap[parentIndex]) < 0) {
          [this.heap[index], this.heap[parentIndex]] = [
            this.heap[parentIndex],
            this.heap[index],
          ];
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
    bubbleDown(index) {
      let length = this.heap.length;
      while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let smallestIndex = index;
  
        if (
          leftChildIndex < length &&
          this.compare(this.heap[leftChildIndex], this.heap[smallestIndex]) < 0
        ) {
          smallestIndex = leftChildIndex;
        }
  
        if (
          rightChildIndex < length &&
          this.compare(this.heap[rightChildIndex], this.heap[smallestIndex]) < 0
        ) {
          smallestIndex = rightChildIndex;
        }
  
        if (smallestIndex !== index) {
          [this.heap[index], this.heap[smallestIndex]] = [
            this.heap[smallestIndex],
            this.heap[index],
          ];
          index = smallestIndex;
        } else {
          break;
        }
      }
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  }
  
  // Helper function to create a linked list from an array
  const createLinkedList = (arr) => {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let num of arr) {
      current.next = new ListNode(num);
      current = current.next;
    }
    return dummyHead.next;
  };
  
  // Example usage:
  let l1 = createLinkedList([1, 4, 5]);
  let l2 = createLinkedList([1, 3, 4]);
  let l3 = createLinkedList([2, 6]);
  
  let result = mergeKLists([l1, l2, l3]);
  
  // Helper function to print the linked list
  const printLinkedList = (node) => {
    let arr = [];
    while (node !== null) {
      arr.push(node.val);
      node = node.next;
    }
    console.log(arr.join(' -> '));
  };
  
  printLinkedList(result); // Output should be 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6
  
  /* Activity 3: Trapping rain water */
  
  // Task 3: Trapping rain water leetcode problem
  
  /**
   * @param {number[]} height
   * @return {number}
   */
  var trap = function (height) {
    const n = height.length;
    if (n === 0) return 0;
    let left = 0;
    let right = n - 1;
    let leftMax = 0,
      rightMax = 0;
    let waterTrapped = 0;
  
    while (left < right) {
      if (height[left] <= height[right]) {
        if (height[left] >= leftMax) {
          leftMax = height[left];
        } else {
          waterTrapped += leftMax - height[left];
        }
        left++;
      } else {
        if (height[right] >= rightMax) {
          rightMax = height[right];
        } else {
          waterTrapped += rightMax - height[right];
        }
        right--;
      }
    }
    return waterTrapped;
  };
  
  const height = [4, 2, 0, 3, 2, 5];
  console.log(trap(height));
  
  /* Activity 4: N Queens */
  
  // Task 4: solve n queen problem leetcode
  
  /**
   * @param {number}
   * @return {string[][]}
   */
  
  var solveNQueens = function (n) {
    const result = [];
  
    const solve = (board, row) => {
      if (row === n) {
        result.push(
          board.map((cols) => '.'.repeat(cols) + 'Q' + '.'.repeat(n - cols - 1))
        );
        return;
      }
  
      for (let col = 0; col < n; col++) {
        if (isValid(board, row, col)) {
          board.push(col);
          solve(board, row + 1);
          board.pop();
        }
      }
    };
    const isValid = (board, row, col) => {
      for (let i = 0; i < row; i++) {
        if (
          board[i] === col ||
          board[i] - i === col - row ||
          board[i] + i === col + row
        ) {
          return false;
        }
      }
      return true;
    };
  
    solve([], 0);
  
    return result;
  };
  
  const n= 1;
  
  console.log(solveNQueens(n));
  
  /* Activity 5: Word ladder */
  // Task 5: Solve the word ladder problem on leetcode
  
  /**
   * @param {string} beginWord
   * @param {string} endWord
   * @param {string[]} wordList
   * @return {number}
   */
  var ladderLength = function(beginWord, endWord, wordList) {
      // Create a set of the wordList for quick lookup
      const wordSet = new Set(wordList);
      if (!wordSet.has(endWord)) return 0;
  
      // Initialize the queue for BFS
      let queue = [[beginWord, 1]];
  
      while (queue.length > 0) {
          let [currentWord, level] = queue.shift();
  
          // Try changing each letter of the current word
          for (let i = 0; i < currentWord.length; i++) {
              for (let c = 97; c <= 122; c++) { // ASCII 'a' to 'z'
                  let newWord = currentWord.slice(0, i) + String.fromCharCode(c) + currentWord.slice(i + 1);
  
                  // If the new word is the end word, return the level + 1
                  if (newWord === endWord) return level + 1;
  
                  // If the new word is in the word set, add it to the queue and remove from the set
                  if (wordSet.has(newWord)) {
                      queue.push([newWord, level + 1]);
                      wordSet.delete(newWord);
                  }
              }
          }
      }
  
      // If no transformation sequence is found
      return 0;
  };
  
  const beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
  
  console.log(ladderLength(beginWord, endWord, wordList));