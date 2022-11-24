// Adobe, FanClash Frontend Interview
// Flatten a Deeply Nested Object

const obj = {
    A: "12",
    B: 23,
    C: {
        P: 45,
        M: {
            L: "Goa",
            N: 19
        },
        Q: [1, 2]
    }
}

function flattenNestedObj(obj) {

    let flattenObj = {};
    console.log('obj', obj);
    
    for(let key in obj) {
        console.log('key: ', key); 

        if(typeof(obj[key]) === "object" && !Array.isArray(obj[key])) {

            const currentObj = flattenNestedObj(obj[key]); // recursive calls

            console.log('currentObj: ', currentObj);

            for(childKey in currentObj) {
                console.log('childKey: ', childKey);
                flattenObj[key + '.' + childKey] = currentObj[childKey];
            }

        } else {
            flattenObj[key] = obj[key];
        }
    }

    return flattenObj;
}

console.log('flattenObj: ',flattenNestedObj(obj));