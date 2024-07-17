//Day: 5
//Functions

//Activity: 1
//Function declaration
function oddOrEven(a) {
    if ( a % 2 == 0 ) {
        console.log(a + " is even");
    }
    else{
        console.log(a + " is odd");
    }
}
oddOrEven(2)

function calcSquare(a) {
    let sq = a * a;    
    console.log("Square of " + a + " is " + sq);
}
calcSquare(4);

//Activity: 2
//Function Expression
const findMax = function findMax(a, b) {
    if (a > b) {
        console.log(a + " is the maximum");
    }
    else{
        console.log(b + " is maximum");
    }
}
findMax(5, 6)

const concatStr = function concatStr(str1, str2) {
    return str1 + str2;
}
console.log(concatStr("Good", "Morning"));

//Activity: 3
//Arrow Function
