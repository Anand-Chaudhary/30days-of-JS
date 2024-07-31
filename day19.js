//Day: 19
//Regular Expression

//Activity: 1
//Basic Expression
const text1 = "I love Javascript. Javascript is a versatile language.";
const regex1 = /Javascript/g;
const matches1 = text1.match(regex1);
console.log("Matches for 'Javascript':", matches1);

const text2 = "My phone number is 123-456-7890.";
const regex2 = /\d+/g;
const matches2 = text2.match(regex2);
console.log("Matches for digits:", matches2);

//Activity: 2
//Character Classes and Quantifiers
const text3 = "Alice went to the Wonderland. Bob was not there.";
const regex3 = /\b[A-Z][a-z]*\b/g;
const matches3 = text3.match(regex3);
console.log("Matches for words starting with a capital letter:", matches3);

const text4 = "There are 12 apples, 30 oranges, and 7 bananas.";
const regex4 = /\d+/g;
const matches4 = text4.match(regex4);
console.log("Matches for sequences of digits:", matches4);

//Activity: 3
//Grouping and Capturing
const text5 = "(123)456-7890";
const regex5 = /^\((\d{3})\)(\d{3})-(\d{4})$/;
const matches5 = regex5.exec(text5);
if (matches5) {
    console.log("Area code:", matches5[1]);
    console.log("Central office code:", matches5[2]);
    console.log("Line number:", matches5[3]);
} else {
    console.log("No match found.");
}

const text6 = "user@example.com";
const regex6 = /^(\w+)@(\w+\.\w+)$/;
const matches6 = regex6.exec(text6);
if (matches6) {
    console.log("Username:", matches6[1]);
    console.log("Domain:", matches6[2]);
} else {
    console.log("No match found.");
}

//Activity: 4
//Assertions and Boundaries
const text7 = "Hello world";
const regex7 = /^\b\w+\b/;
const matches7 = text7.match(regex7);
console.log("Word at the beginning of the string:", matches7);

const text8 = "Goodbye world";
const regex8 = /\b\w+\b$/;
const matches8 = text8.match(regex8);
console.log("Word at the end of the string:", matches8);

//Activity: 5
//Practiacl Application
const password = "Password1@";
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const isValid = passwordRegex.test(password);
console.log("Is the password valid?", isValid);

const url = "https://www.example.com";
const regex = /^(https?:\/\/)?([\w\d-]+\.)+[\w\d-]+(\/[\w\d-]+)*\/?$/;
const isValidurl = regex.test(url);
console.log("Is the URL valid?", isValidurl);