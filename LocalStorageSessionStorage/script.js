// function saveToLocalStorage(key, value) {
//         localStorage.setItem(key, value)
// }

// function retrieveFromLocalStorage(key) {
//         return localStorage.getItem(key);
// }

// const key = "myKey";
// const value = "hello, from local storage";

// saveToLocalStorage(key, value);

// const retrievedValue = retrieveFromLocalStorage(key);
// console.log(retrievedValue);

// function saveObj(key, obj) {
//         const JSONString = JSON.stringify(obj);
//         localStorage.setItem(key, JSONString)
// }

// function retrieveObj(key) {
//         const JSONString = localStorage.getItem(key);
//         return JSON.parse(JSONString);
// }

// const key2 = 'myObject';
// const myObject = {
//         name : "dipali",
//         age: 21,
//         job: "Developer"
// };

// saveObj(key2, myObject);

// console.log(retrieveObj(key2));

function removeFromLocalStorage(key) {
        localStorage.removeItem(key);
}

function printStorageContent() {
        console.log("Current Local Storage :");
        for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
                console.log(`${key} : ${value}`);
                
        }
}

// console.log("Before Removal:");
// printStorageContent();

// removeFromLocalStorage(key);
// console.log("After removal:");
// printStorageContent();

function saveToSessionStorage(key, value) {
        sessionStorage.setItem(key, value)
}

function retrieveFromSessionStorage(key) {
        return sessionStorage.getItem(key);
}

const key = "myKey";
const value = "hello, from session storage";

saveToSessionStorage(key, value);

const retrievedValue = retrieveFromSessionStorage(key);
console.log(retrievedValue);

function saveObj(key, obj) {
        const JSONString = JSON.stringify(obj);
        sessionStorage.setItem(key, JSONString)
}

function retrieveObj(key) {
        const JSONString = sessionStorage.getItem(key);
        return JSON.parse(JSONString);
}

const key2 = 'myObject';
const myObject = {
        name : "amrit",
        age: 21,
        job: "Developer"
};

saveObj(key2, myObject);

console.log(retrieveObj(key2));
