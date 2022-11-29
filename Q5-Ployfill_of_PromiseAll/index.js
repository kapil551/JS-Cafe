// Polyfill of promise.all

const dummyAPI = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time);
        }, time);
    })
}

const tasksArray = [dummyAPI(1000), dummyAPI(2000), dummyAPI(0)];

// promise.all polyfill
Promise.myAll = (tasksArray) => {

    return new Promise((resolve, reject) => {

        const output = [];
        let count = 0;
        tasksArray.forEach((promise, index) => {
            promise.then((data) => {
                
                output[index] = data;
                count++;
    
                if(count === tasksArray.length - 1) {
                    resolve(output);
                }
            }).catch((err) => {
                reject(err);
            })
        })
    })
}

Promise.myAll(tasksArray).then((data) => {
    console.log(`the output is ${data}`);
}).catch((err) => {
    console.log(`error is ${err}`);
})