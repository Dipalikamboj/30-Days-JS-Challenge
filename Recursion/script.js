function factorial(num) {
    if (num === 1 || num === 0) {
        return 1;
    }
    else {
        return num * factorial(num-1)
    }
}

const ans1 = factorial(5);
const ans2 = factorial(10);
const ans3 = factorial(2);
// console.log(ans1,ans2,ans3);

function fibonacci(n) {
    if (n > 1) {
        return fibonacci(n-1) + fibonacci(n-2)
    } else return n;
}

// console.log(fibonacci(10)); 
// console.log(fibonacci(5)); 
// console.log(fibonacci(7)); 

let arr1 = [2, 26, 6, 8, 8]
let arr2 = [3, 1, 5, 8, 0]
let arr3 = [9, 4, 4, 8, 10]
let arr4 = [1, 12, 6, 8, 7]
let arr5 = [2, 4, 1, 8, 2]

function sumOfArr(arr) {
   if(arr.length === 0) return 0;
   else {
    return arr[0] + sumOfArr(arr.slice(1));
   } 
}

// console.log(sumOfArr(arr1));
// console.log(sumOfArr(arr2));
// console.log(sumOfArr(arr3));
// console.log(sumOfArr(arr4));
// console.log(sumOfArr(arr5));


function findMax(arr) {
    if(arr.length === 1) return arr[0];

    else {
            restArr = findMax(arr.slice(1))
            return arr[0] > restArr ? arr[0] : restArr;
    }
}


// console.log(findMax(arr1));
// console.log(findMax(arr2));
// console.log(findMax(arr3));
// console.log(findMax(arr4));
// console.log(findMax(arr5));


function reverseStr(str) {
        if(str.length <= 1) return str;
        else {
            return reverseStr(str.slice(1)) + str[0];
        }
}

// console.log(reverseStr("Dipalo"));
// console.log(reverseStr("Hello"));
// console.log(reverseStr("ChaiAurCode"));

let str1 = "Dipalo";
let str2 = "noon";
let str3 = "madam";
let reverseStr1 = reverseStr(str1);
let reverseStr2 = reverseStr(str2);
let reverseStr3 = reverseStr(str3);

function checkPalindrome(str, reversedStr) {
        if (str === reversedStr) return console.log(`Yes string is palindrome`);

        else console.log(`No String is not palindrome`);
}

// checkPalindrome(str1, reverseStr1)
// checkPalindrome(str2, reverseStr2)
// checkPalindrome(str3, reverseStr3)

function countEle(arr, target) {
    if (arr.length === 0) return 0;

   let firstElementCount = (arr[0] === target ) ? 1 :0;

    return firstElementCount + countEle(arr.slice(1),target);
}

// console.log(countEle([1,2,3,1,1,1,3,4,5,5,6],1));


function binarySearch(arr, target, low =0 , high = arr.length -1) {

    if(low > high) {
        return -1;
    }

    const mid = Math.floor((low+high)/2)

    if (arr[mid] === target) {
        return mid;
    } 
    if (arr[mid] > target) {
        return binarySearch(arr, target , low, mid -1)
    }
    if (arr[mid] < target) {
        return binarySearch(arr, target, mid +1, high)
    }
    
}


const case1 = [1,2,3,4,5,6,7,8,10,50];
console.log(binarySearch(case1, 10));