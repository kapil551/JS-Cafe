/*
    1. This refers to an Object.
    2. The value of this depends on how the function is invoked

    Behaviour of this in a function: this refers to window object
    Behaviour of this in a Object: this refers to the object

    Arrow Functions: Arrow functions don't have a defined this. Instead they treat it as a variable and
                    they try to get the value lexically (inherit from parent scope)


*/

const person = {
    name: 'Kapil',
    getName: function() {
        return `${this.name} is my name`;
    },
    getNameArrow: () => {
        return `${this.name} is my name`;
    }
}

console.log(person.getName());
console.log(person.getNameArrow());

function test() {
    console.log(this);
}
test();

function User() {
    this.name = "John Doe"
    this.score = 20
    this.sayUser = function() {

        // when 'this is accessible'
        console.log(this.name)

        function innerFunction() {
            
            // when 'this' refers to the global scope/object
            console.log(this.name);
        }

        innerFunction();
    }
}

let name = new User();
name.sayUser();

function UserArrow() {
    this.name = "John Doe"
    this.score = 20
    this.sayUser = function() {

        // when 'this is accessible'
        console.log(this.name)

        const innerFunction = () => {
            
            // when 'this' refers to the global scope/object
            console.log(this.name);
        }

        innerFunction();
    }
}

let nameArrow = new UserArrow();
nameArrow.sayUser();