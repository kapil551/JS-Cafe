// Zomato Frontend Interview

/*
Explanation:

const addThreeNums = (a, b, c) => a+b+c

const add = memorize(addThreeNums)

add(1,2,3) => 6 // call the function and return the value
add(1,2,3) => 6 // cached value will be returned

*/

/*
Concept:

    1. Closures
    2. Call, Bind, Apply
*/


const memorize = (func) => {

    const cache = {};

    return function(...args) {
        const argsToString = JSON.stringify(args);

        if(argsToString in cache) {
            console.log(`fetching from cache for args ${argsToString}`);
            return cache[argsToString];
        } else {
            console.log(`computing values for args ${argsToString}`)
            const result = func.apply(this, args);
            cache[argsToString] = result;
            return result;

        }
    }
}

const addThreeNums = (a, b, c) => {
    return a + b + c;
}

const add = memorize(addThreeNums);
console.log(add(1, 2, 3)); // calling add function for the first time
console.log(add(1, 2, 3)); // calling the add function with the same arguments for the second time

// Memorization with recursive function

const factorial = memorize((n) => {
    if (n === 0) return 1;
    else return n * factorial(n-1);
})
console.log(factorial(10))
console.log(factorial(11))


