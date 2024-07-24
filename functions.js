// Task 1

function evenOdd(num){
    if(num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}

// evenOdd(57);

// Task 2

function square(num){
    return num * num ;
}

// console.log(square(12));

// Task 3

const maximum = function(num1, num2){
    return (num1 > num2 ? num1 : num2);
}

// console.log(maximum(3, 7));

// task 4

const concatResult = function(str1, str2){
    return str1 + str2;
}

// console.log(concatResult("Hello ", "World"));


// Task 5

const sumofTwo = (num1, num2) => {
    return num1 + num2;
}

// console.log(sumofTwo(10,20));

// Task 6

const containsChar = (str, char) => {
    if(str.includes(char)) { // includes tha naam function ka
        return true;
    }
    else return false;
}

// console.log(containsChar("Hello Dipali", "oo")); 


// Task 7

function productofTwo(num1 , num2 = 5){
    return num1 * num2
}
// console.log(productofTwo(5,4));

function greeting(name, age = 10){
    const greet = `Hello ${name}, Your age is ${age}`;
    return greet;
}

// console.log(greeting("Dipali"));


// Task 9

function one(  func = function two(times) {
    for (let i = 1; i <= times; i++) {
        console.log("Hello");
    }   
}) {
     func(10)
}


// one();

// function two(){
//     console.log("Hello");
// }

// Task10

function parent( child1, child2 , value){
    console.log("Value is ", value);
     const res1 = child1(value);
     console.log("Result 1 is", res1);
     child2(res1);
}

// parent( child1, child2, 20);

function child1(value){
    return 2*value;
}

function child2(res1){
    console.log("Result 2 is ", 5 + res1);
}