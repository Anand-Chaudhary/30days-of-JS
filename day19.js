//Day: 19
//Regular Expression

//Activity: 1
//Basic Expression
const text1 = "I love Javascript. Javascript is a versatile language.";
const regex1 = /Javascript/g;
const matches1 = text.match(regex1);
console.log("Matches for 'Javascript':", matches1);

const text2 = "My phone number is 123-456-7890.";
const regex2 = /\d+/g;
const matches2 = text.match(regex2);
console.log("Matches for digits:", matches2);

//Activity: 2
//Character Classes and Quantifiers
const text3 = "Alice went to the Wonderland. Bob was not there.";
const regex3 = /\b[A-Z][a-z]*\b/g;
const matches3 = text.match(regex3);
console.log("Matches for words starting with a capital letter:", matches3);

const text4 = "There are 12 apples, 30 oranges, and 7 bananas.";
const regex4 = /\d+/g;
const matches4 = text.match(regex4);
console.log("Matches for sequences of digits:", matches4);

