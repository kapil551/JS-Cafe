
setTimeout(function() {
	console.log('A');
}, 0);
Promise.resolve().then(function() {
	console.log('B');
}).then(function() {
	console.log('C');
});

console.log("D");

/*
	Promises create microtask which has higher priority over macrotask which is created by setTimeout.
*/


