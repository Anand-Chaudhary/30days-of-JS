const add = function sum(a, b) {
    return a + b;
}

const person ={
    name : "Aakash",
    age : 16,
    greet(){
        console.log(`Hi, ${this.name} of age: ${this.age}`);
    }
}
module.exports = {add, person}