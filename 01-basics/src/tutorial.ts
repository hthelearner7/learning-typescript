console.log("hello world");
console.log("typescript tutorial");

let awesomeName: string = "hello";
awesomeName = "world".toUpperCase();
console.log(awesomeName);

let amount: number = 2;
console.log(amount);

let a = "someValue";
console.log(a);

// Create a variable of type string and try to invoke a string method on it.
let greeting: string = "Hello, Typescript";
greeting = greeting.toUpperCase();
console.log(greeting);

// Create a variable of type number and try to perform a mathematical operation on it.
let someNumber = 10;
someNumber = someNumber * 2;
console.log(someNumber);

// Create a variable of type boolean and try to perform a logical operation on it.
let someBoolean: boolean = someNumber > 1;
someBoolean = !someBoolean;
console.log(someBoolean);

// Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.

greeting = 1;
someNumber = true;
someBoolean = "hello";
// You can use type annotation or inference
