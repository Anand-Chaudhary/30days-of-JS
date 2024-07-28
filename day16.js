//Day: 16
//Recursion

//Activity: 1
//Basic Recursion
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n-1)
};
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));


function fibonacci(n) {
    if (n < 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(5));

//Activity: 2
//Recursion with Array
function sumArray(arr) {
    if (arr.length == 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
};
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([2]));
console.log(sumArray([]));

function maxElement(arr) {
    if (arr.length == 1) return arr[0];
    let max = maxElement(arr.slice(1));
    return arr[0] > max ? arr[0] : max;
};
console.log(maxElement([1, 2, 3, 4, 5]));
console.log(maxElement([100, 120, 30, 900]));

//Activity: 3
//String Manipulation Using Recursion
function revStr(str) {
    if (str.length == 0) return "";
    return revStr(str.slice(1)) + str[0];
}
console.log(revStr("Aakash"));
console.log(revStr("Helllo"));
console.log(revStr(""));

function palindromeChecker(str) {
    if (str.length == 0) return "";
    if(revStr(str.slice(1)) + str[0] == str) return "String is palindrome";
    return "String is not palindrome"
}
console.log(palindromeChecker("Aakash"));
console.log(palindromeChecker("racecar"));