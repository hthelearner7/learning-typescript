console.log("tutorial 10");

type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;
// typeof guard
function checkValue(value: ValueType): void {
    if (typeof value === "string") {
        console.log(value.toLowerCase());
        return;
    } else if (typeof value === "number") {
        console.log(value.toFixed(2));
        return;
    }
    console.log("boolean: ", value);
}
checkValue(value);

type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };
type Animal = Dog | Cat;
// Equality Narrowing
// function makeSound(animal: Animal) {
//     if (animal.type === "dog") {
//         animal.bark();
//     } else {
//         animal.meow();
//     }
// }

let c: Cat = {
    type: "cat",
    name: "rocky",
    meow: () => console.log("meowing..."),
};
let d: Dog = {
    type: "dog",
    name: "rocky",
    bark: () => console.log("barking..."),
};

// check for property
// The "in" operator in TypeScript
function makeSound(animal: Animal): void {
    if ("bark" in animal) {
        animal.bark();
    } else {
        animal.meow();
    }
}
makeSound(c);
makeSound(d);

// truthy / falsy guard
function printLength(str: string | null | undefined): void {
    if (str) {
        console.log(str.length);
    } else {
        console.log("No string provided");
    }
}
printLength("Hello"); // Outputs: 5
printLength(null); // Outputs: No string provided
printLength(undefined); // Outputs: No string provided

// instanceof guard
function checkInput(input: Date | string): string {
    if (input instanceof Date) {
        return input.getFullYear().toString();
    }
    return input;
}
const year = checkInput(new Date());

const randomDate = checkInput("2020-05-05");
console.log(year);
console.log(randomDate);

type Student = {
    name: string;
    study: () => void;
};

type User = {
    name: string;
    login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
    return Math.random() > 0.5
        ? { name: "john", study: () => console.log("Studying") }
        : { name: "mary", login: () => console.log("Logging in") };
};

const person = randomPerson();
// type predicate
function isStudent(person: Person): person is Student {
    // type assertion
    return (person as Student).study !== undefined;
}

if (isStudent(person)) {
    person.study(); // This is safe because TypeScript knows that 'person' is a Student.
} else {
    person.login();
}
