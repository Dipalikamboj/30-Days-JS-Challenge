function twoSum(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length; j++) {
            if((arr[i] + arr[j]) === target){
                console.log(`${i}, ${j} index value's sum is ${target}`);
            } 
        }   
    }
}

const arr = [1,2,3,4,5,6];
// const target = 10;
const target = 5;

// twoSum(arr, target)


function reverseInt(int) {
    let isNegative = int < 0;
    int = Math.abs(int);
    let rev = 0;
    while (int > 0) {
        let rem = int % 10;
        rev = rev * 10 + rem;
        int = Math.floor(int / 10);
    }
    return isNegative ? -rev : rev; 
}

const num = -7000;
// console.log(reverseInt(num)); 

function palindrome(int) {
    const reversedInt = reverseInt(int);
    if (int === reversedInt) {
        return true;
    } else return false;
}

// console.log(palindrome(-7777));


class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let list = new ListNode();
    let current = list;

    while (l1 !== null && l2 !== null) {
        if(l1.value < l2.value){
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 !== null ? l1 : l2;

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
    let result = '';
    while (current !== null) {
        result += current.value + ' -> ';
        current = current.next;
    }
    result += 'null';
    console.log(result);
}

let list1 = createList([1, 3, 5, 9]);
let list2 = createList([2, 4, 6, 7, 8]);

let mergedList = mergeTwoLists(list1, list2);
printLinkedList(mergedList);


function validParenthesis(string) {
    const stack = [];
    const map = {
        ')' : '(',
        '}' : '{',
        ']' : '[',
    }

    for (const char of string) {
        if(char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if(char === ')' || char === ']' || char === '}') {
            if(stack.length === 0 || stack.pop() !== map[char] ) {
                return false;
            } 
        }
    }
    return stack.length === 0;
}

// console.log(validParenthesis("()"));
// console.log(validParenthesis("({){}(})"));
// console.log(validParenthesis("{]}"));
// console.log(validParenthesis("{}"));
