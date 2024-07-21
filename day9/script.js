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
