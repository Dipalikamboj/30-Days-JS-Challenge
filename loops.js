// Task 1

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// +++++++++++++++++++ Task 2 +++++++++++++++
for (let i = 1; i <= 10; i++) {
    // console.log(`5 * ${i} = ${5*i}`);
    
}

// Task 3

// let i = 1;
// let sum = 0;
// while(i<=10){
//     sum+=i;
//     i++;
// }

// console.log("Sum is", sum);

// Task 4

// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }


// Task 5
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

// Task 6

let factorial = 1;
let input = 5;
let num = input;

do {
        factorial = factorial * num;
        num--;
 
} while (num > 1);

// console.log(`Factorial of ${input} is ${factorial}`);


// Task 7

for (let i = 1; i < 6; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
       pattern+= "* ";
        
    }
    // console.log(pattern);
    
}


// Task 8

// for (let index = 1; index <= 10; index++) {
//     if (index===5) {
//         continue;
//     }
//     console.log(index);
    
// }

// Task 9

// for (let index = 1; index <= 10; index++) {
//     if(index === 7){
//         break;
//     }
//     console.log(index);
    
// }