//Day: 4
//Loops

//Activity: 1
//For Loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let p = 1;
for (let i = 1; i <= 10; i++) {
    p = 5 * i;
    console.log(p);
}

//Activity: 2
//While Loop
let a = 1, sum = 0;
while (a<=10) {
    sum = sum + a;
    console.log(sum);
    a++;
}

let b = 10;
while (b >= 1) {
    console.log(b);
    b--;
}

//Activity: 3
//Do-While Loop
let c = 1
do {
    console.log(c);
    c++;
} while (c <= 5);

let d = 5, fact = 1, product = 1;
do {
    product = d * fact;
    console.log(product);
    fact++;
} while (fact <= d);