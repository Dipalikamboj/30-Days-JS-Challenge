// TASK 1

let arrayOfNumbers = [ 1, 2, 3, 4, 5]
// console.log(arrayOfNumbers);


// TASK 2


// console.log(arrayOfNumbers[0]);
let length = arrayOfNumbers.length;
// console.log(arrayOfNumbers[length - 1]);


// TASK 3 

arrayOfNumbers.push(6)
// console.log(arrayOfNumbers);

// TASK 4

arrayOfNumbers.pop();
// console.log(arrayOfNumbers);

// TASK 5

arrayOfNumbers.shift(); // Remove the first element
// console.log(arrayOfNumbers);

// TASK 6

arrayOfNumbers.unshift(1);
// console.log(arrayOfNumbers);

// TASK 7

let newArr1 = [];

newArr1 = arrayOfNumbers.map( (elem) => {
    return elem*2;
})

// console.log(newArr);

// TASK 8

let newArr2 = [];

newArr2 = arrayOfNumbers.filter(function(elem){
    return elem % 2 === 0;
})

// console.log(newArr2);


// TASK 9

let newArr3 = [];
newArr3 = arrayOfNumbers.reduce( (acc, curr) => curr + acc, 0)

// console.log(newArr3);

// TASK 10

for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    // console.log(element);
}

// TASK 11

arrayOfNumbers.forEach(element => {
        // console.log(element);
});

// TASK 12

let twoDArray = [ [1, 2],
                  [3, 4] ];

    twoDArray.forEach(row => {
       console.log(...row); 
    });
    // console.log(...twoDArray[0], ...twoDArray[1]);

// TASK 13

console.log(twoDArray[1][0]);