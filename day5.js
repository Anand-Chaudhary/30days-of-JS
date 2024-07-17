//Day: 5
//Functions

//Activity: 1
//Function declaration
function oddOrEven(a) {
    if ( a % 2 == 0 ) {
        console.log(a + " is even");
    }
    else{
        console.log(a + " is odd");
    }
}
oddOrEven(2)

function calcSquare(a) {
    let sq = a * a;    
    console.log("Square of " + a + " is " + sq);
}
calcSquare(4);

//Activity: 2
//Function Expression
const findMax = function findMax(a, b) {
    if (a > b) {
        console.log(a + " is the maximum");
    }
    else{
        console.log(b + " is maximum");
    }
}
findMax(5, 6)

const concatStr = function concatStr(str1, str2) {
    return str1 + str2;
}
console.log(concatStr("Good", "Morning"));

//Activity: 3
//Arrow Function
const sum = (a, b)=>{
    return a + b;
}
console.log(sum(10, 5));

const contain = (str, char) => {
    return str.includes(char)
}
console.log(contain("Aakash", "h"))

//Activity: 4
//Function Parameters and Default Values
function product(a, b = 3) {
    return a * b;
}
console.log(product(4));

function greet(name, age = 12) {
    console.log("Hi, " + name + " of age " + age);
}
greet("Aakash");

//Activity: 5
//Higher Order Functions
function callback() {
    console.log("I am a callback");
}

function HOF(callback, a) {
  for (let i = 0; i <= a; i++) {
    callback()
  }
}
console.log(HOF(callback, 5));


function higherOrderFunction(fun1, fun2, val) {
    const result1 = fun1(val);
    const result2 = fun2(result1);
    return result2;
}

function addTwo(x) {
    return x + 2;
}

function multiplyByThree(x) {
    return x * 3;
}

const initialValue = 5;
const finalResult = higherOrderFunction(addTwo, multiplyByThree, initialValue);

console.log(finalResult); 
