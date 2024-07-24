//Day: 12
//Error Handeling

//Activity: 1
//Basic Error Handling
function throwError(a, b) {
    throw SyntaxError('You didnt meet the norms');
    return a + b;
}
try {
    throwError(5, 6)
} catch (error) {
    console.log(error.message);
}

function divide(a, b) {
    if (b == 0) {
        throw SyntaxError('You cannot divide a number by 0');
    };
    return a / b;
}

try {
    console.log(divide(4, 0));
} catch (err) {
    console.log(err.message);
}

//Activity: 2
//Finally Block
function sum(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw Error('This is not possible')
    }
    return a + b;
}

try {
    console.log(sum(5, 6));
} catch (error) {
    console.log(error.message);
} finally {
    console.log('The Function is Completed');
}

//Activity: 3
//Custom Error Objects
// Custom error class
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

function riskyFunction() {
    throw new CustomError("Something went wrong in riskyFunction!");
}

try {
    riskyFunction();
} catch (error) {
    if (error instanceof CustomError) {
        console.error(`CustomError caught: ${error.message}`);
    } else {
        console.error(`An unexpected error occurred: ${error.message}`);
    }
}


function check(name) {
    if (name === undefined || name.length == 0) {
        throw new SyntaxError('You cannot keep it empty');
    }
    return name;
}

try {
    console.log(`The name is ${check()}`);
}
catch (error) {
    console.log(error.message);
}

//Activity: 4
//Error Handeling in Promises
function randomPromise() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.5;

        setTimeout(() => {

            if (isSuccess) {
                resolve('Promise resolved');
            } else {
                reject('Promise rejected');
            }
        })
    }, 1000)
}


async function randomPromise2() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.5;

        setTimeout(() => {

            if (isSuccess) {
                resolve('Promise resolved');
            } else {
                reject('Promise rejected');
            }
        })
    }, 1000)
}

randomPromise().then(result => console.log(result))
    .catch(error => console.error(error));

randomPromise2().then(result => console.log(result))
    .catch(error => console.error(error));

//Activity: 5
//Gracefull Error handeling in Fetch
let invalidUrl = 'https://invalid.com/data';

fetch(invalidUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error(`Fetch error: ${error.message}`);
    });

const fetchData = async () => {
    let invalidUrl = 'https://invalid.com/data';

    try {
        const response = await fetch(invalidUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Data:', data);
    } catch (error) {
        console.error(`Fetch error: ${error.message}`);
    }
};

fetchData();
