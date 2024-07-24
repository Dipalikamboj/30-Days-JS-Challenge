// Task 1
// let num = 0;

// if(num > 0){
//     console.log("Number is positive");
// } else if (num < 0){
//     console.log("Number is negative");
// } else {
//     console.log("Number is 0");
// }

// Task 2

// let age = 20;

// if(age >=18){
//     console.log("You can vote");
// } else {
//     console.log("You cannot vote");
// }

// Task 3

// num1 = 25;
// num2 = 10;
// num3 = 15;

// if(num1 > num2){
//     if(num1 > num3){
//         console.log(`${num1} is greatest`);
//     }
// } else if(num2 > num3){
//     if(num2 > num1){
//         console.log(`${num2} is greatest`);
//     }
// } else {
//         console.log(`${num3} is greatest`);
// }

// Task 4

// let day = "5";

// switch (day) {
//     case "1":
//         console.log("Monday");
//         break;
//     case "2":
//         console.log("Tuesday");
//         break;
//     case "3":
//         console.log("Wednesday");
//         break;
//     case "4":
//         console.log("Thursday");
//         break;
//     case "5":
//         console.log("Friday");
//         break;
//     case "6":
//         console.log("Saturday");
//         break;
//     case "7":
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Please enter a valid number");
// }


// Task 5

// let score = 50;

// switch (true) {
//     case (score <= 30):
//         console.log("F");
//         break;
//     case score <= 50:
//         console.log("D");
//         break;
//     case (score <= 70):
//         console.log("C");
//         break;
//     case (score <= 80):
//         console.log("B");
//         break;
//     case (score >= 80):
//         console.log("A");
//         break;
//     default:
//         console.log("Enter a valid input");
//         break;
// }

// Task 6

// let number = 77;

// console.log(( (number % 2 == 0) ? "Number is even" : "Number is odd"));

// Task 7 

let year = 2023;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log("Leap year");
} else {
    console.log("Not leap year");
}