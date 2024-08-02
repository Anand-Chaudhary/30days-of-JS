//Day 21
//Leetcode Easy
// Day 21: LeetCode Easy
// Tasks/Activities:

// Activity 1
// Two Sum
function twoSum(array, target) {
    let number1 = 0;
    let number2 = 1;
  
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (i != j) {
          if (array[i] + array[j] === target) {
            number1 = i;
            number2 = j;
            console.log(`first element is: ${array[i]} and 2nd is: ${array[j]}`);
            return [i, j];
          }
        }
      }
    }
    return null;
  }
  
  arrayToCheck = [2, 3, 4, 5];
  console.log(twoSum(arrayToCheck, 5));
  
  // Activity 2: Reverse Integer
  // • Task 2: Solve the "Reverse Integer" problem on LeetCode.
  // o Write a function that takes an integer and returns it with its digits reversed.
  // o Handle edge cases like negative numbers and numbers ending in zero.
  // o Log the reversed integers for a few test cases.
  function reverseInt(num) {
    const isNegative = num < 0;
    const numString = Math.abs(num).toString();
    const revString = numString.split("").reverse().join("");
    let revNum = parseInt(revString, 10);
    if (isNegative) {
      revNum *= -1;
    }
    return revNum;
  }
  
  const num = 1002344;
  console.log(reverseInt(num));
  
  // Activity 3: Palindrome Number
  // • Task 3: Solve the 'Palindrome Number" problem on LeetCode.
  // o Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
  // o Log the result for a few test cases, including edge cases like negative numbers.
  function checkPalindrom(num) {
    if (num < 0) return false;
    const numToString = num.toString();
    const revString = numToString.split("").reverse().join("");
  
    return numToString === revString;
  }
  
  console.log(checkPalindrom(233332));
  
  // Activity 4: Merge Two Sorted Lists
  // • Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
  // o Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
  // o Create a few test cases with linked lists and log the merged list.
  // Define a simple linked list node structure
  function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
  }
  
  // Function to merge two sorted linked lists
  function mergeTwoSortedLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
  
    // Case 1: l1's largest element is less than or equal to l2's smallest element
    if (getLast(l1) <= l2.val) {
      return concatenate(l1, l2);
    }
  
    // Case 2: l2's largest element is less than or equal to l1's smallest element
    if (getLast(l2) <= l1.val) {
      return concatenate(l2, l1);
    }
  
    // Default case: Perform two-pointer merge
    let dummy = new ListNode(0);
    let current = dummy;
  
    while (l1 !== null && l2 !== null) {
      if (l1.val <= l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
  
    current.next = l1 !== null ? l1 : l2;
  
    return dummy.next;
  }
  
  function getLast(head) {
    while (head.next !== null) {
      head = head.next;
    }
    return head.val;
  }
  
  function concatenate(l1, l2) {
    let current = l1;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = l2;
    return l1;
  }
  
  function printList(node) {
    while (node) {
      process.stdout.write(node.val + " ");
      node = node.next;
    }
    console.log();
  }
  
  const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
  const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));
  const list3 = new ListNode(7, new ListNode(8, new ListNode(9)));
  const list4 = new ListNode(0, new ListNode(1, new ListNode(2)));
  
  const mergedList1 = mergeTwoSortedLists(list1, list2);
  const mergedList2 = mergeTwoSortedLists(list1, list3);
  const mergedList3 = mergeTwoSortedLists(list4, list2);
  
  printList(mergedList1); 
  printList(mergedList2); 
  printList(mergedList3); 

  function isValid(s) {
    const stack = [];
    const mapping = {
      ")": "(",
      "}": "{",
      "]": "[",
    };
  
    for (let char of s) {
      if (mapping[char]) {
        const topElement = stack.pop();
        if (topElement !== mapping[char]) {
          return false;
        }
      } else {
        stack.push(char);
      }
    }
  
    return stack.length === 0;
  }
  
  console.log(isValid("[{()}]"));