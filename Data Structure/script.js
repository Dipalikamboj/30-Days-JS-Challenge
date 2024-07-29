class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.next = node3;

// Traversing

// let current = node1;
// while( current !== null) {
//     console.log(current.value);
//     current = current.next;
// }

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

// remove

remove() {
    if(this.head === null) {
        return null;
    } 
    
    if(this.head.next === null){
        const value = this.head.value;
        this.head = null;
        return value;
    }

    let current = this.head;
    while(current.next.next !== null) {
        current = current.next;
    }

    const value = current.next.value;
    current.next = null;
    return value;

}

display(){
    let current = this.head;
    while(current !== null ){
        console.log(current.value);
        current = current.next;
    }
}

}

const list = new LinkedList();
list.add(2);
list.add(4);
list.add(6);

// console.log("List is:");
// list.display()

list.remove();

// console.log("After removing 1 element");
// list.display();

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        if(this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if(this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length -1]
    }

    isEmpty() {
        return this.items.length === 0;
    }

    display() {
        console.log(this.items.join(' '));
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.display();

console.log("After pop");
stack.pop();
stack.display();


function reversedString(str) {
    const stack = new Stack();

    for (let char of str) {
        stack.push(char);
    }

    let reversedStr = '';
    while(!stack.isEmpty()) {
        reversedStr += stack.pop()
    }

    return reversedStr;
}

const originalStr = "hello";
const reverseStr = reversedString(originalStr);

// console.log(originalStr);
// console.log(reverseStr);

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if(this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    front() {
        if(this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    display() {
        console.log(this.items.join(' '));
    }

}

const queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

// queue.display()
// console.log(queue.front());
// queue.dequeue()
// console.log("After dequeue");
// queue.display();

class PrinterQueue {
    constructor() {
        this.queue = new Queue()
    }

    addPrintJob(job) {
        this.queue.enqueue(job);
        console.log(`Added print job : ${job}`);
    }

    processNextJob() {
        if(this.queue.isEmpty()) {
            console.log(`No primt job is in the queue`);
            return null;
        }
        const job = this.queue.dequeue();
        console.log(`Processing print job ${job}`);

    }

    displayQueue() {
        if(this.queue.isEmpty()) {
            console.log(`No primt job is in the queue`);
            return null;
        }
        console.log(`Current queue is: `);
        this.queue.display();
    }
}

const printerQueue = new PrinterQueue();
printerQueue.addPrintJob("Document1.pdf")
printerQueue.addPrintJob("img.png")
printerQueue.addPrintJob("Report.docx")
printerQueue.addPrintJob("Resume.pdf")

printerQueue.displayQueue();

console.log("Processing jobs:");
printerQueue.processNextJob();
printerQueue.processNextJob();

console.log("After processing:");
printerQueue.displayQueue();

class TreeNode {
    constructor(value = null) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

const root = new TreeNode(1);
const leftChild = new TreeNode(2);
const rightChild = new TreeNode(3);

root.left = leftChild;
root.right = rightChild;

// console.log("Root is : ", root);
// console.log("Left Child is : ", root.left);
// console.log("Right Child is : ", root.right);

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if(this.root === null ){
            this.root = newNode;
        } else {
            this._insert(this.root, newNode);
        }
    }

    _insert(current, newNode) {
        if(newNode.value < current.value) {
            if(current.left === null) {
                current.left = newNode;
            } else {
                this._insert(current.left, newNode)
            }
        } else {
            if(current.right === null) {
                current.right = newNode;
            } else {
                this._insert(current.right, newNode)
            }
        }
    }

    inOrderTraversal() {
        const result = [];
        this._inOrder(this.root, result);
        return result;
    }

    _inOrder(node , result) {
        if(node !== null) {
            this._inOrder(node.left, result);
            result.push(node.value);
            this._inOrder(node.right, result)
        }
    }
}

const tree = new BinaryTree();
tree.insert(5)
tree.insert(7)
tree.insert(4)
tree.insert(3)
tree.insert(6)
tree.insert(8)
tree.insert(1)
tree.insert(9)

console.log("Inorder traversal of binary tree is:");
console.log(tree.inOrderTraversal());

