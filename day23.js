// Day 23: LeetCode Hard
// Tasks/Activities:

// Activity 1. Median of Two Sorted Arrays
// Task 1: Solve the Median of Two Sorted Arrays problem on LeetCode.
// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays, Log the median for a few test cases, including edge cases.


let findMedianSortedArrays = function(nums1, nums2) {
    // Concatenate the two arrays into a single array `arr`
    let arr = nums1.concat(nums2);
    // Sort the combined array in ascending order
    arr.sort((a, b) => (a - b));

    // Get the length of the combined and sorted array
    let n = arr.length;
    
    // Check if the length of the array is even
    if (n % 2 === 0) {
        // If even, calculate the median as the average of the two middle numbers
        return ((arr[n / 2] + arr[n / 2 - 1]) / 2);
    } else {
        // If odd, the median is the middle number
        return arr[Math.floor(n / 2)];
    }
};
console.log(findMedianSortedArrays([1,3], [2])); // TC=O(log m+n), SC=O(m+n)



// Activity 2: Merge k Sorted Lists
// Task 2: Solve the "Merge k Sorted Lists problem on LeetCode.
// Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the Linked lists into one sorted linked list.
// Create a few test cases with linked lists and log the merged list.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // Base case: if there are no lists, return null
    if (lists.length === 0) {
        return null;
    }

    // Continue merging until only one list remains
    while (lists.length > 1) {
        // Take the first two lists from the array
        let list1 = lists.shift();
        let list2 = lists.shift();

        // Merge the two lists and get the result
        let mergedList1List2 = mergeTwoLists(list1, list2);

        // Add the merged list back to the array
        lists.push(mergedList1List2);
    }

    // Return the single merged list
    return lists[0];
}

/**
 * Merge two sorted linked lists into one sorted linked list
 */
function mergeTwoLists(list1, list2) {
    // Create a dummy node to simplify the merging process
    let curr = new ListNode();
    let dummy = curr;

    // While both lists are not empty
    while (list1 && list2) {
        // Compare the values of the current nodes in both lists
        if (list1.val < list2.val) {
            // Attach the smaller node to the merged list
            curr.next = list1;
            // Move to the next node in list1
            list1 = list1.next;
        } else {
            // Attach the smaller node to the merged list
            curr.next = list2;
            // Move to the next node in list2
            list2 = list2.next;
        }
    }
}