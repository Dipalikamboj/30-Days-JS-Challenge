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
    localStorage.setItem("userData", JSON.stringify(userData));
    displayUserData();
})

function displayUserData() {
    const savedData = document.querySelector('#savedData');
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData) {
        savedData.textContent = `Name: ${userData.name}, Email: ${userData.email}`;
    } else {
        savedData.textContent = "No data saved";
    }
} 
    
window.onload = displayUserData;
