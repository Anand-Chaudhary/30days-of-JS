//Day: 15
//Closures

//Activity: 1
//Understanding Closures
function outer(fruit) {
    function inner() {
        console.log(`My favourite fruit is ${fruit}`);
    }
    return inner;
}
const myClosure = outer("Mango");
myClosure()

function counter() {
    let counter = 0;
    function privateCounter(){
        function increment(){
            counter++;
            console.log(counter);
        }
        function getValue(){
            console.log(counter);
        }
        increment();
        increment();
        getValue();
    };
    return privateCounter;
};
const myCounter = counter();
myCounter();

//Activity: 2
//Practical Closures
function ids() {
    let lastId = 0;
    function newID() {
        lastId++;
        let startWith = "DAV";
        let id = startWith + lastId.toString();
        console.log(`Your id is: ${id}`);
    };
    return newID;
}
const myID = ids()
myID();
myID();

function user(userName) {
    function greet() {
        console.log(`Hi, a warm welcom to ${userName}.`);
    }
    return greet;
};
const newUser = user("Aakash");
newUser();

//Activity: 3
//Closures in loop
let func = [];
for (let i = 0; i < 10; i++) {
    func.push(function(index){
        return function(){
            console.log(index);
        }
    }(i))
}
func[0]();
func[1]();

//Activity: 4
//Module Pattern
function Module() {
    let items = [];
    return{
        addItems(item){
            items.push(item);
            console.log(items);
        },

        removeItems(item){
            let index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
                console.log(`${item} removed.`);
            } else {
                console.log(`${item} not found.`);
            }
        },

        listItems(){
            console.log(items);
        }
    }
}

const myModule = Module();
myModule.addItems("Apple");
myModule.addItems("Dog");
myModule.addItems("Cat");
myModule.removeItems("Apple");
myModule.listItems();

//Activity: 5
const add = (a, b) => {
    return a + b;
}

function memoize(fun) {
    let previousResults = {};
    return function(...args) {
        let key = JSON.stringify(args);
        if (key in previousResults) {
            console.log(`You have done this before`);
            return previousResults[key];
        } else {
            let result = fun(...args);
            previousResults[key] = result;
            return result;
        }
    }
}

const sum = memoize(add);
console.log(sum(3, 4)); 
console.log(sum(3, 4)); 
console.log(sum(4, 5)); 

function memoizeFactorial() {
    const cache = {}; 

    function factorial(n) {
        if (n <= 1) return 1; 
        if (cache[n] !== undefined) {
            console.log(`You have done this before ${n}`);
            return cache[n]; 
        } else {
            cache[n] = n * factorial(n - 1); 
            return cache[n];
        }
    }

    return factorial;
}

const memoizedFactorial = memoizeFactorial();

console.log(`Calculating we get, ${memoizedFactorial(5)}`);