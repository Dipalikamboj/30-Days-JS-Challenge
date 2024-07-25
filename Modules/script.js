// import sayHello, { addition, Person , multiply, subtract } from "./utilities.js";
import _ from "lodash";

// let lodash = require("lodash");

let arr = [1, 2, 3];
let values = [0, 6, "d"];

let newArr = _.concat(arr, values)

console.log(`After concatination ${newArr}`);

// import * as utility from './utilities.js'
console.log(utility.addition(4, 6));

console.log(utility.Person);
// Person.printName();

// console.log(multiply(3, 6));  // 18
// console.log(subtract(10, 5));   // 5

sayHello() // we can use default export without importing
