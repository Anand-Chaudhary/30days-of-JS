//Day: 10
//Event Handeling

//Activity: 1
//Basic Event Handeling
document.querySelector('button').addEventListener('click', () => {
    document.querySelector('.change').innerText = 'iuafhjnjodanoijuie ahicfjidhjihb u eb ehuiahuhfjbnhvbdshubhuubhsbjb';
});

document.querySelector('img').addEventListener('dblclick', () => {
    document.querySelector('img').classList.add('hide')
})

//Activity: 2
//Mouse Events
document.querySelector('.mouseover').addEventListener('mouseover', () => {
    document.querySelector('.mouseover').style.backgroundColor = "red"
})

document.querySelector('.mouseover').addEventListener('mouseout', () => {
    document.querySelector('.mouseover').style.backgroundColor = "green"
})

//Activity: 3
//Key Board Events
document.querySelector('input').addEventListener('keydown', (key) => {
    console.log(key);
})

document.querySelector('input').addEventListener('keyup', () => {
    document.querySelector('.task6').innerText = document.querySelector('input').value
})

//Activity: 4
//Form events
document.querySelector('.submit').addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log('Username: ', document.querySelector('.username').value);
    console.log('Email: ', document.querySelector('.email').value);
})

//Activity: 5
//Event Delegation
document.getElementById('fruits').addEventListener('click', (e) => {
    console.log(`You clicked on fruit: ${e.target.innerText}`);
});

const parent = document.getElementById("parent");
const addButtons = document.getElementById("addButtons");
parent.addEventListener("click", (e) => {
  e.target.tagName == "BUTTON" && alert("Button Clicked");
});
addButtons.addEventListener("click", () => {
  const newButton = document.createElement("button");
  newButton.textContent = "New Button";
  document.getElementById("parent").appendChild(newButton);
});