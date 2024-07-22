//Day: 10
//Event Handeling

//Activity: 1
//Basic Event Handeling
document.querySelector('button').addEventListener('click', () => {
    document.querySelector('.change').innerText = 'iuafhjnjodanoijuie ahicfjidhjihb u eb ehuiahuhfjbnhvbdshubhuubhsbjb';
});

document.querySelector('img').addEventListener('dblclick', ()=>{
    document.querySelector('img').classList.add('hide')
})

//Activity: 2
//Mouse Events
document.querySelector('.mouseover').addEventListener('mouseover', ()=>{
    document.querySelector('.mouseover').style.backgroundColor = "red"
})

document.querySelector('.mouseover').addEventListener('mouseout', ()=>{
    document.querySelector('.mouseover').style.backgroundColor = "green"
})

//Activity: 3
//Key Board Events
