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
    static greeting(){
        console.log("Good morning");
    }
}
const person = new Person("Aakash", 16);
console.log(person);
person.greet();
person.updateAge(17);

//Activity: 2
//Class Inheritance
class student extends Person{
    static studentCount = 0;
    constructor(name, age,studentId, studentCount){
        super(name, age);
        this.studentId = studentId;
        student.studentCount += 1;
        console.log(`Total Number of students = ${student.studentCount}`);
    }
    greet(){
        super.greet();
        console.log(`Your student id is ${this.studentId}`);
    }
}
const student1 = new student("Anand", 18, 200);
console.log(student1.studentId);
student1.greet();

//Activity: 3
//Static method and property
Person.greeting();
const student2 = new student("Ananya", 18, 201);
student2.greet();