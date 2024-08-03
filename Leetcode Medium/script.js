// task1

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNum(l1, l2) {
  let list = new ListNode();
  let current = list;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);

    current = current.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  return list.next;
}

function createList(arr) {
  let list = new ListNode();
  let current = list;
  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return list.next;
}

function printLinkedList(head) {
  let current = head;
  let result = [];
  while (current !== null) {
    result.push(current.val)
    current = current.next;
  }
  console.log(result.join("->"));
  
}

const list1 = createList([2,4,3]);
const list2 = createList([5,6,4]);

const result = addTwoNum(list1, list2);
printLinkedList(result);


// task 2

function LongestSubString(str) {
  let maxLength = 0;
  let start = 0;
  const seen = new Map();

  for (let end = 0; end < str.length; end++) {
    if (seen.has(str[end])) {
      start = Math.max(seen.get(str[end]) + 1, start);
    }

    seen.set(str[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

// console.log(LongestSubString("abcabcbb"));
// console.log(LongestSubString("cccccc"));
// console.log(LongestSubString("au"));

// task 3

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);

    const area = width * minHeight;
    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

// console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// console.log(maxArea([1,1]))
// console.log(maxArea([1,2,1]))

// task 4

function threeSum(nums) {
  const results = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        results.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;

        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return results;
}

// console.log(threeSum([0,0,0]));
// console.log(threeSum([-1,0,1,2,-1,4]));
// console.log(threeSum([]));

// task5

function groupAnagram(strs) {
  const anagramMap = {};

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (anagramMap[sortedStr]) {
      anagramMap[sortedStr].push(str);
    } else {
      anagramMap[sortedStr] = [str];
    }
  }
  return Object.values(anagramMap);
}

// console.log(groupAnagram(["eat", "tan", "ate", "nat", "bat", "tea"]));
