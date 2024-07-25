const lodash = require('lodash');
const axios = require('axios');

let array = [1, 2, 3, 4, 5, 6];
const sum = lodash.sum(array);
console.log(sum);

const evenNumbers = lodash.filter(array, (num) => num % 2 === 0);
console.log(evenNumbers);

async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;
        
        console.log('Fetched Posts:');
        posts.slice(0, 5).forEach(post => {
            console.log(`Title: ${post.title}`);
            console.log(`Body: ${post.body}`);
            console.log('---');
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();