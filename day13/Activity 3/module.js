const lang = 'js';
const challenge = '30 Days of JS';

function add(a, b) {
    return a + b;
}

function evenOrOdd(a) {
    if (a % 2 == 0) {
        console.log('The number is even');
    } else{
        console.log('The number is odd');
    }
}

module.exports = {lang, challenge, add, evenOrOdd}