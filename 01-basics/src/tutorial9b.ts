import newStudent, { sayHello, person, type Student } from "./tutorial9a";

// import { someValue } from "./example.js"; // make "allowJS": true in tsconfig to use js files
// console.log(someValue);

sayHello("TypeScript");
console.log(newStudent);
console.log(person);
const anotherStudent: Student = {
    name: "bob",
    age: 23,
};
console.log(anotherStudent);
