//Day: 6
//Arrays

//Activity: 1
//Array creation and access

const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0], arr[4]);

//Activity: 2
//Array Methods
arr.push(6);
arr.pop();
arr.shift();
arr.unshift(1)
console.log(arr);

//Activity: 3
let mapArr = arr.map((val) => {
    return val * 2;
});
console.log(mapArr);

let filterArr = arr.filter((val) => {
    return val%2 === 0
})
console.log(filterArr);

let reducedArr = arr.reduce((res, curr) => {
    return res + curr;
})
console.log(reducedArr);

//Activity: 4
//Array Iteration
for (let i = 0; i < arr.length; i++) {
     console.log(arr[i]);
}

arr.forEach(element => {
    console.log(element);
});

