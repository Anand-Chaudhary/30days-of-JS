//Day: 15
//Closures

//Activity: 1
//Understanding Closures
function outer() {
    let fruit = "Mango"
    function inner() {
        console.log(`My favourite fruit is ${fruit}`);
    }
    inner();
}
outer();

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
    privateCounter();
};
counter();

//Activity: 2
//Practical Closures
