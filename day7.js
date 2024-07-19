//Day: 7
//Objects

//Activity: 1, 2 and 4
//Object creation and access, methods and this keyword
let Book = {
    title : "Wishpers From A Grave",
    author : "Tamanna Sharma",
    year : 2024,
    getTitleandAuthor : ()=>{
        return`${Book.title} by ${Book.author}`
    },

    getYear : (year) =>{
        return `This book was not published on ${Book.year} but in ${year}`
    },

    getString : function () {
        return `Book ${this.title} by author ${this.author} was publish in year ${this.year}`
    }
}
console.log(Book);
console.log(Book.title);
console.log(Book.author);
console.log(Book.getTitleandAuthor());
console.log(Book.getYear(2023));
console.log(Book.getString());

//Activity: 3
//Nested Objects
let library = {
    name: "DAV Library",
    books: [
        {
            name : "Economic",
        },
        {
            name : "Accounts",
        },
        {
            name : "Basic Maths"
        }
    ]
}
console.log(library);
console.log(library.name);
library.books.forEach(book =>{
    console.log((book.name));
})

//Activity: 5
//Object iteration
for (const property in Book) {
    console.log(`${property} : ${Book[property]}`);
}

