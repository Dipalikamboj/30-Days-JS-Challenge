const title = document.getElementById('title');
const para = document.querySelector('.para');
const body = document.querySelector('body');
const list = document.querySelector('.list');


title.innerHTML = "Text Changed";
para.style.backgroundColor = "red"


const div = document.createElement('div')

div.innerHTML = "Heelo I am a div";
div.style.height = "100px"
div.style.width = "100px"
div.style.border = "2px solid black"
div.style.backgroundColor = "pink"
document.body.appendChild(div);

const li1 = document.createElement('li');
const li2 = document.createElement('li');

li1.textContent = "Three";
li2.textContent = "Four";


list.appendChild(li1)
list.appendChild(li2)

list.removeChild(li2)
// body.removeChild(div)

const img = document.createElement('img')

body.appendChild(img);
img.src = "image.jpg"

img.style.height = "300px";
div.className = "mydiv";
// console.log(div);

div.classList.add("newDivClass");
div.classList.remove("mydiv");

const btn = document.createElement('button');

btn.textContent = "Click Here to change the title";
body.appendChild(btn);

btn.addEventListener('click', () => {
    title.innerHTML = "Text after clicking"
})

div.addEventListener('mouseover', ()=> {
    div.style.borderColor = "red"
})