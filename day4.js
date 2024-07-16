//Day: 4
//Loops

//Activity: 1
//For Loop
function printOneToTen() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
printOneToTen();

function tableOfFive() {
    let p = 1;
    for (let i = 1; i <= 10; i++) {
        p = 5 * i;
        console.log(p);
    }
}
tableOfFive();

//Activity: 2
//While Loop

function sumOfOneToTen() {
    let a = 1, sum = 0;
    while (a <= 10) {
        sum = sum + a;
        console.log(sum);
        a++;
    }
}
sumOfOneToTen();

function printTenToOne() {
    let b = 10;
    while (b >= 1) {
        console.log(b);
        b--;
    }
}
printTenToOne();

//Activity: 3
//Do-While Loop
function printOneToFive() {
    let c = 1
    do {
        console.log(c);
        c++;
    } while (c <= 5);
}

function factorial(d) {
    let fact = 1;
    if ( d == 0 || d == 1) {
        fact = 1;
    }
    do {
        fact = d * fact;
        d--
    } while ( d >= 1);
    return fact
}
console.log(factorial(6));

//Activity: 4
//Nested Loops
function star(a) {
    for (let i = 0; i <= a; i++) {
        for (let j = 0; j <= i-1; j++) {
            process.stdout.write("* ")
        };
        console.log();
    };
}
star(5);

//Activity: 5
//Loop Control Structure
function skipNumber(n) {
    for (let i = 0; i <= n; i++) {
        if (i == 5) {
            continue;
        }
        console.log(i);
    }
}
skipNumber(10);

function stopNumber(n) {
    for (let i = 0; i <= n; i++) {
        if (i == 7) {
            console.log(i);
            break;
        };
        console.log(i);
    };
};
stopNumber(10);