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