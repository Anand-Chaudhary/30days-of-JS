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
