// Task 1

let name = "Dipali"
let age = 20;

// console.log(`Hello, my name is ${name} and I'm ${age} years old`);


// Task 2

let multiLineStr = `This is a multi-line string.
It spans across multiple lines.
Template literals make it easy!`;

// console.log(multiLineStr);

// Task 3

let Arr1 = [1, 2, 3, 4, 5, 6];

// let [a, b] = Arr1;

// console.log(a);
// console.log(b);

// Task 4

let bookObj = {
    title : "Ramyaman",
    author : "Valmiki",
    
    print : function(){
        console.log(this.title);
    }
}

let { title : t , author : a} = bookObj;

// console.log(a, t);

// Task 5

let Arr2 = [...Arr1, 7, 8, 9, 10]
// console.log(Arr2);



// Task 6

function Sum(...num){
    
    return num.reduce((acc, curr) => acc + curr, 0);
    
}


// console.log(Sum(5, 5, 20));


// Task 7
function productOfTwo(num1, num2 = 1){
    return num1 * num2
}


// console.log(productOfTwo(3));
// console.log(productOfTwo(3,2));

// Task 8
let title = "Love Story Ek prem Katha"
let author = "MYself"
let print = function(){
    console.log(`${title}'s author is ${author}`);
}
let Book1 = {
    title ,
    author,
    print
};
// console.log(Book1);

// Book1.print();

// Task 9

const key1 = "name"
const key2 = "age"
const key3 = "price"

const value1 = "chai"
const value2 = 30
const value3 = "1 crore"

const obj = {
    [key1] : value1,
    [key2] : value2,
    [key3] : value3
}

console.log(obj);