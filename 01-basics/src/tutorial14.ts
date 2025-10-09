import { a, type Random, type User } from "./types";
// Typescript Declaration File
// In TypeScript, .d.ts files, also known as declaration files,consist of type definitions, and are used to provide types for JavaScript code. They allow TypeScript to understand the shape and types of objects, functions, classes, etc., in JavaScript libraries, enabling type checking and autocompletion in TypeScript code that uses these libraries.

console.log(a);
const r: Random = {
    name: "randomName",
};
console.log(r);
const u: User = {
    name: "user1",
    age: 20,
};
console.log(u);
