// Day 20: LocalStorage and SessionStorage
// Tasks/Activities:

// Activity 1
//Understanding LocalStorage
localStorage.setItem("string", "Test");
myValue = localStorage.getItem("string");
console.log(myValue);

let person = {
  name: "Aakash",
  country: "India",
  age: 43,
};

localStorage.setItem("objectPerson", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("objectPerson")));

// Activity 3
//Understanding SessionStorage
sessionStorage.setItem("string", "Aakash");
console.log(sessionStorage.getItem("string"));

let task6Object = {
  language: "JS",
  version: "1.0",
  projectName: "JS 30Days Challenge",
};
sessionStorage.setItem("object", JSON.stringify(task6Object));
console.log(JSON.parse(sessionStorage.getItem("object")));