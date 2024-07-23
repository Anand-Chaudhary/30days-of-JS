//Day: 11
//Promises and async:await

//Activity: 1
//Understanding Promises

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hello world");
        resolve("Success");
    }, 2000);
})

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        reject("There is an Error");
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("Worked", res);
});

promise.catch((err) => {
    console.log(err);
});

//Activity: 2
//Chaining Promises
function getData(dataId, getNextdata) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success")
            if (typeof getNextdata === 'function') {
                getNextdata();
            }
        }, 2000)
    })
}

getData(1, () => getData(2));

//Activity: 3
//Async : Await

async function getDatas() {
    console.log("Getting data 1.....");
    await getData(1);
}
getDatas();

async function fetchData() {
    try {
        let result = await getDataWithPossibleError();
        console.log("Result:", result);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

function getDataWithPossibleError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5;
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject(new Error("Failed to fetch data."));
            }
        }, 2000);
    });
}

fetchData();

//Activity: 4
//Fetching Data

const apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';

fetch(apiUrl)
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
        console.error('Error:', error);
    });


async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();

//Activity: 5
//Concurrent Promises

const apiUrl1 = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const apiUrl2 = 'https://api.exchangerate-api.com/v4/latest/USD';
const apiUrl3 = 'https://api.agify.io/?name=michael';

const fetch1 = fetch(apiUrl1).then(response => response.json());
const fetch2 = fetch(apiUrl2).then(response => response.json());
const fetch3 = fetch(apiUrl3).then(response => response.json());

Promise.all([fetch1, fetch2, fetch3])
    .then(results => {
        console.log('Results:', results);
    })
    .catch(error => {
        console.error('Error:', error);
    });


const apiUrl4 = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const apiUrl5 = 'https://api.exchangerate-api.com/v4/latest/USD';
const apiUrl6 = 'https://api.agify.io/?name=michael';

const fetch4 = fetch(apiUrl4).then(response => response.json());
const fetch5 = fetch(apiUrl5).then(response => response.json());
const fetch6 = fetch(apiUrl6).then(response => response.json());

Promise.race([fetch4, fetch5, fetch6])
    .then(result => {
        console.log('First result:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
