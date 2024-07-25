export { multiply, subtract }

export function addition(num1, num2) {
    return num1 + num2
}

export const Person = {
    username : "Hitesh",
    age : 30 ,

    printName : function() {
        console.log(this.username);
    }
}

function multiply(num1, num2) {
    return num1 * num2
}
function subtract(num1, num2) {
    return num1 - num2
}

export default function sayHello() {
    console.log("Hellooo Buddy!!!!");
}
