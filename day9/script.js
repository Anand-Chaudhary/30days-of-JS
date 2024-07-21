//Day: 9 
//DOM Manipulation

//Activity: 1
//Selecting and Manipulating Element
document.getElementById('id').innerText = "Hi";
document.querySelector('.color').style.backgroundColor = "red";

//Activity: 2
//Creating and Appending Elecmet
const div = document.createElement('div');
div.append('This div is appended');

document.querySelector('body').appendChild(div);


const li = document.createElement('li');
li.append('Appended');

const ul = document.getElementsByTagName('ul')[0];
if (ul) {
    ul.appendChild(li);
}

//Activity: 3
//Removing elements
let remove = document.getElementById('remove');
if (remove) {
    remove.remove();
}

let lastElement = document.querySelector('.removeLast')
lastElement.lastElementChild.remove()

//Activity: 4
//Modifying attributes
document.querySelector('img').setAttribute('src', 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

document.getElementById('text').style.color = 'green';

//Activity: 5
//Event Listener
document.querySelector('button').addEventListener('click', () => {
    document.querySelector('.change').innerText = 'iuafhjnjodanoijuie ahicfjidhjihb u eb ehuiahuhfjbnhvbdshubhuubhsbjb';
});

let box = document.querySelector('.box');

box.addEventListener('mouseover', () => {
    box.style.border = '2px solid green';
});

box.addEventListener('mouseout', () => {
    box.style.border = '2px solid black';
});