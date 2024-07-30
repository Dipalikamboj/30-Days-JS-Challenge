function bubbleSort(arr) {
  let n = arr.length - 1;
  let swapped;
  for (let i = 0; i < n; i++) {
    swapped = false;
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

const array = [64, 32, 87, 12, 90, 34, 80];
console.log("Original array: ", array);
// const sortedArr = bubbleSort(array);

const sortedArr = selectionSort(array);

// const sortedArr = quickSort(array);

console.log("After quick sort array: ",quickSort(array));
// console.log("Sorted array: ",sortedArr);

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];

  let left = [];
  let right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left),pivot, ...quickSort(right)];
}

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const target = 90;
// console.log(linearSearch(array,target));

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // console.log(`Checking middle element at index ${mid} : ${arr[mid]}`);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch(sortedArr, target));

function count(str) {
  const charCount = {};

  for (const char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  for (const char in charCount) {
    console.log(`${char} : ${charCount[char]}`);
  }
}

const str = "heelloooo";
count(str);


function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }

        charIndexMap[currentChar] = end;

        maxLength = Math.max(maxLength, end - start + 1);
    }

    console.log(`The length of the longest substring without repeating characters is: ${maxLength}`);
    return maxLength;
}

const String = "abcabcbb";
lengthOfLongestSubstring(String);



function rotateArray(arr, k) {
    const n = arr.length;
    
    k = k % n;
    
    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
    
    console.log("Rotated array:", arr);
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
        start++;
        end--;
    }
}

const k = 3;

rotateArray(array, k);

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0; 
    let j = 0; 

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

    console.log("Merged array:", mergedArray);
    return mergedArray;
}

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];

mergeSortedArrays(array1, array2);

