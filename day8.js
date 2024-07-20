//Day: 8
//ES6+ Features

//Activity: 1
//Template Literals
let name = "Aakash";
let age = 16;
console.log(`Hi, I am ${name} and I am ${age} years old`);
console.log(`Hi \nI am ${name} \nI am ${age} years old`);

//Activity: 2
//Destructuring
let a, b, rest;
[a, b, rest] = [1, 2, 3, 4, ,5];
console.log(a, b);


let Book = {
    title : "Wishpers From A Grave",
    author : "Tamanna Sharma",
    year : 2024
}
let {title, author} = Book;
console.log(`Book: ${title} \nAuthor: ${author}`);

//Activity: 3
//Spread and rest operator
let arr1 = [1, 2, 3, 4, 5,]
let arr2 = [6, 7, 8, 9, 10];
let newArr = [...arr1, ...arr2]
console.log(newArr);

function sum(...num) {
    return num.reduce((res, curr)=> res + curr, 0)
}
console.log(sum(2, 3, 4, 5));

//Activity: 4
//Default Parameters
function product(c, d = 1) {
    return c * d;
}

console.log(product(2));
console.log(product(3, 4));

//Activity: 5
//Enhanced Object Literals
