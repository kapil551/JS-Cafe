// Flipkart Interview Question
// Flatten An Array

let arr = [
    [1, 2],
    [3, 4],
    [[5, 6, 7, 8, 9]],
    [[[[[10, 11, 12, 13, 14, 15]]]]],
    [[19, 20]],
];

// Ouptut: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

/*
    inputArray = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]]

    function flatten(inputArray) => output [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

let inputArray = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]];

let nestedArray = [1, [2, 3, [4, 5 , [[6, 7]], 8, 9]], 10, 11, [[[[20]]]]];

function flattenArray(inputArray) {
    let flattenResult = [];

    for(let idx = 0; idx < inputArray.length; idx++) {
        let element = inputArray[idx];
        console.log('element: ', element);

        // if the element is an array
        if(Array.isArray(element)) {
            const currentFlattenArray = flattenArray(element);
            console.log('currentFlattenArray: ', currentFlattenArray);
            flattenResult.push(...currentFlattenArray);
        } else {
            flattenResult.push(element);
        }

    }

    return flattenResult;
}

console.log(`-------------------------`);
console.log(flattenArray(arr));
console.log(`-------------------------`);
console.log(flattenArray(inputArray));
console.log(`-------------------------`);
console.log(flattenArray(nestedArray));
console.log(`-------------------------`);


