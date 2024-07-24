const btn = document.querySelector('#btn')
const p = document.querySelector('p');
const img = document.querySelector('#image');
const input = document.querySelector('#textInput')
const form = document.querySelector('#myform');
const output = document.querySelector('#output')


btn.addEventListener('click', () => {
    p.innerHTML = "The text inside para has changed"
})

let flag = 0;
img.addEventListener('dblclick', (e) => {
    // console.log(e);
    if(flag === 0){
        img.style.opacity = 0;
        flag = 1;
    } else {
        img.style.opacity = 1;
        flag = 0;
    }
   
})

p.addEventListener('mouseover', function(){
    p.style.backgroundColor = "red"
})

p.addEventListener('mouseout', () => {
    p.style.backgroundColor = "white";
})

input.addEventListener('keydown', function(e){

    console.log(e.key);
})

input.addEventListener('keyup', (e) => {
    p.innerHTML = e.key;
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const fruits = document.querySelector('#fruits').value;


    console.log(email);
    console.log(password);
    output.innerHTML = fruits;

    
    
});

const myList = document.querySelector('#list');
myList.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        console.log(e.target.textContent);
    }
})

const addBtn = document.querySelector('#addItem');
const item = document.querySelector('#item');

function addItem(){
    if(item.value != ""){
        const li = document.createElement('li');
        const list = document.querySelector('#list2')
        li.textContent = item.value;
        list.appendChild(li);
    } else {
        alert("Please enter a value first")
    }
    
}

addBtn.addEventListener('click', addItem)

item.value = ""








