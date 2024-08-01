const form = document.querySelector('#myForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const userData = {
        name : name,
        email : email
    };

    console.log(userData);
    sessionStorage.setItem("userData", JSON.stringify(userData));
    displayUserData();
})

function displayUserData() {
    const savedData = document.querySelector('#savedData');
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if(userData) {
        savedData.textContent = `Name: ${userData.name}, Email: ${userData.email}`;
    } else {
        savedData.textContent = "No data saved";
    }
} 
    
window.onload = displayUserData;

function saveToSessionStorage(key, value) {
    sessionStorage.setItem(key, value)
}

function retrieveFromSessionStorage(key) {
    return sessionStorage.getItem(key);
}

const key = "myKey";
const value = "hello, from session storage";

saveToSessionStorage(key, value);

function removeFromsessionStorage(key) {
    sessionStorage.removeItem(key);
}

function printStorageContent() {
    console.log("Current Session Storage :");
    for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            const value = sessionStorage.getItem(key);
            console.log(`${key} : ${value}`);
            
    }
}

console.log("Before Removal:");
printStorageContent();

removeFromsessionStorage(key);
console.log("After removal:");
printStorageContent();


