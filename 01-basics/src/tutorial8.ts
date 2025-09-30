let someValue: any = "this is a string";
// type assertion
// Using type assertion to treat 'someValue' as a string
let strLength: number = (someValue as string).length;

type Bird = {
    name: string;
};

// Assume we have a JSON string from an API or local file
let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObject = JSON.parse(birdString) as Bird;
console.log(birdObject);
let dogObject = JSON.parse(dogString);

let dog = dogObject as Bird;
console.log(dog.name);

enum Status {
    Pending = "pending",
    Declined = "declined",
}

type User = {
    name: string;
    status: Status;
};

// save Status.Pending in the DB as a string
// retrieve string from the DB

// const statusValue = "pending";
const user: User = { name: "johnny", status: "pending" as Status };
console.log(user);

let unknownValue: unknown;
unknownValue = "hello world";
unknownValue = [1, 2, 3, 4];
unknownValue = 122.255;
// unknownValue.toFixed(2); // error
if (typeof unknownValue === "number") {
    console.log(unknownValue.toFixed(2));
}

function runSomeCode() {
    const random = Math.random();
    if (random < 0.5) {
        throw new Error("Something went wrong");
    } else {
        throw "some error";
    }
}

try {
    runSomeCode();
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    } else {
        console.log(error);
        console.log("there was an error....");
    }
}

// let someVar: never = 0; // error

type Theme = "light" | "dark";

function checkTheme(theme: Theme): void {
    if (theme === "light") {
        console.log("dark theme");

        return;
    } else if (theme === "dark") {
        console.log("dark theme");
        return;
    }
    // theme
}

enum Color {
    Red,
    Blue,
    Green,
}

function getColorName(color: Color) {
    switch (color) {
        case Color.Red:
            return "Red";
        case Color.Blue:
            return "Blue";
        case Color.Green:
            return "Green";
        default:
            // Exhaustiveness checks are compile-time guarantees that all possible values of a type are handled.
            // at build time
            let unexpectedColor: never = color;
            // at runtime
            throw new Error(`Unexpected color value: ${unexpectedColor}`);
    }
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Blue));
console.log(getColorName(Color.Green));
