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

// greeting = 1;
// someNumber = true;
// someBoolean = "hello";

// union types
let tax: number | string = 10;
tax = 10;
tax = "hello";
console.log(tax);

let requestStatus: "pending" | "success" | "error" = "pending";
console.log(requestStatus);

// type any

let notSure: any = 4;
console.log(notSure);

notSure = "maybe a string";
console.log(notSure);
notSure = false;
console.log(notSure);
notSure = 1;
console.log(notSure);
notSure = () => {
    console.log("i am not sure");
};
console.log(notSure);

let anyRandom;
console.log(typeof anyRandom);

const books: string[] = ["1991", "Demon Slayer", "Doraemon"];
let foundBook: string | undefined;

console.log(books);
// The reason to explicitly type foundBook as string | undefined is to make it clear to anyone reading the code (including your future self) that foundBook might be undefined at runtime. This is a good practice in TypeScript because it helps prevent bugs related to undefined values.
for (let book of books) {
    if (book === "Doraemon") {
        foundBook = book;
        foundBook = foundBook.toUpperCase();
        break;
    }
}
console.log(foundBook, foundBook?.length);

let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "shipped";
orderStatus = "delivered";
console.log(orderStatus);

let discount: number | string = 20;
discount = "20%";
orderStatus = "shipped";
orderStatus = "delivered";
console.log(discount);

let numbersDataArray: number[] = [1, 2];
numbersDataArray.push(100);
console.log(numbersDataArray);

// be careful "[]" means literally empty array
// let randomValues: [];
// randomValues.push(1); // issue as ts wants randomValues to be always empty
// console.log(randomValues);

let randoms: number[] = [];
randoms.push(1);
console.log(randoms);

// be careful with inferred array types
let data = ["apple", "pineapple", 1, 1.2, false, ["1", 1]]; // hover over it and check its types
console.log(data);

let names: (string | boolean)[] = ["apple", true, false, "mango"];
console.log(names);
