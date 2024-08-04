// Task 1

function findMedianSortedArrays(nums1, nums2) {
    // Merge the two arrays
    const mergedArray = mergeArrays(nums1, nums2);
    const n = mergedArray.length;
    
    // Calculate the median
    if (n % 2 === 0) {
        return (mergedArray[Math.floor((n - 1) / 2)] + mergedArray[Math.floor((n - 1) / 2) + 1]) / 2;
    } else {
        return mergedArray[Math.floor(n / 2)];
    }
}

function mergeArrays(arr1, arr2) {
    let i = 0, j = 0;
    const mergedArray = [];

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

    return mergedArray;
}

console.log(findMedianSortedArrays([1, 3], [2])); 
console.log(findMedianSortedArrays([1, 2], [3, 4])); 
console.log(findMedianSortedArrays([0, 0], [0, 0])); 
console.log(findMedianSortedArrays([], [1])); 
console.log(findMedianSortedArrays([2], [])); 

// Task 2

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    insert(node) {
        this.heap.push(node);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex].val > this.heap[index].val) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.getRightChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex(index)].val < this.heap[smallerChildIndex].val) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index].val > this.heap[smallerChildIndex].val) {
                [this.heap[index], this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex], this.heap[index]];
                index = smallerChildIndex;
            } else {
                break;
            }
        }
    }
}

function mergeKLists(lists) {
    const minHeap = new MinHeap();
    for (let list of lists) {
        if (list !== null) {
            minHeap.insert(list);
        }
    }

    let dummy = new ListNode();
    let current = dummy;

    while (minHeap.heap.length > 0) {
        let smallestNode = minHeap.remove();
        current.next = smallestNode;
        current = current.next;
        if (smallestNode.next !== null) {
            minHeap.insert(smallestNode.next);
        }
    }

    return dummy.next;
}

function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function printLinkedList(head) {
    let current = head;
    const values = [];
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    console.log(values.join(" -> "));
}

// Test cases
const list1 = createLinkedList([1, 4, 5]);
const list2 = createLinkedList([1, 3, 4]);
const list3 = createLinkedList([2, 6]);

const mergedList = mergeKLists([list1, list2, list3]);
printLinkedList(mergedList); 

const list4 = createLinkedList([]);
const list5 = createLinkedList([]);
const list6 = createLinkedList([1]);

const mergedList2 = mergeKLists([list4, list5, list6]);
printLinkedList(mergedList2); 

// Task 3

function trap(height) {
    if (height.length === 0) return 0;

    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let waterTrapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
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
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); 
console.log(trap([4,2,0,3,2,5]));          
console.log(trap([1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([2,0,2]));                
console.log(trap([]));                     

// Task 4

function solveNQueens(n) {
  const results = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  function isSafe(board, row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }

  function backtrack(board, row) {
    if (row === n) {
      results.push(board.map((row) => row.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(board, row, col)) {
        board[row][col] = "Q";
        backtrack(board, row + 1);
        board[row][col] = ".";
      }
    }
  }

  backtrack(board, 0);
  return results;
}

function printSolutions(solutions) {
  solutions.forEach((solution) => {
    solution.forEach((row) => console.log(row));
    console.log("");
  });
}

const solutions4 = solveNQueens(4);
console.log("4-Queens Solutions:");
printSolutions(solutions4);

// const solutions8 = solveNQueens(8);
// console.log("8-Queens Solutions:");
// printSolutions(solutions8);

const solutions1 = solveNQueens(1);
console.log("1-Queen Solution:");
printSolutions(solutions1);


// Task 5

function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);

  if (!wordSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]];

  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  while (queue.length > 0) {
    let [currentWord, steps] = queue.shift();

    if (currentWord === endWord) {
      return steps;
    }

    for (let i = 0; i < currentWord.length; i++) {
      for (let char of alphabets) {
        let nextWord =
          currentWord.slice(0, i) + char + currentWord.slice(i + 1);
        if (wordSet.has(nextWord)) {
          queue.push([nextWord, steps + 1]);

          wordSet.delete(nextWord);
        }
      }
    }
  }
  return 0;
}

// console.log(ladderLength("hit", "hot", ["hot"]));
