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

