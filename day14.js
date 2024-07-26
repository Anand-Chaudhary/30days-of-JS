//Day: 14
//Classes

//Activity: 1
//Class Defination
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hi, ${this.name} of age: ${this.age}`);
    }
    updateAge(updatedAge){
        console.log(`Updated age is: ${updatedAge}`);
    }
}
const person = new Person("Aakash", 16);
console.log(person);
person.greet();
person.updateAge(17)