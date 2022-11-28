// Call, Apply and Bind methods in JavaScript

let name1 = {
    firstName: 'Kapil',
    lastName: 'Chaudhary',
}

let name2 = {
    firstName: 'Cristiano',
    lastName: 'Ronaldo',
}

const printFullName = function (...args) {
    console.log(this.firstName + " " + this.lastName);
    console.log('args: ', ...args);
}

// Call - function borrowing
printFullName.call(name1);

printFullName.call(name2);

printFullName.call(name1, 'Hello', 'World', 1);

// Apply

printFullName.apply(name1);
printFullName.apply(name2);
printFullName.apply(name1, ["Hello", "World", 1]);

// Bind

let printByName = printFullName.bind(name1, "Hello", "World", 1);
console.log(printByName);
printByName();


