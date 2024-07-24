//Day: 12
//Error Handeling

//Activity: 1
//Basic Error Handling
function throwError(a, b) {
    throw SyntaxError ('You didnt meet the norms');
    return a +b;
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
    return a/b;
}

try{
    console.log(divide(4, 0));
} catch(err){
    console.log(err.message);
}

//Activity: 2
//Finally Block
function sum(a, b) {
    if(isNaN(a) || isNaN(b)){
        throw Error('This is not possible')
    }
    return a + b;
}

try {
    console.log(sum(5, 6)); 
} catch (error) {
    console.log(error.message);
}finally{
    console.log('The Function is Completed');
}

//Activity: 3