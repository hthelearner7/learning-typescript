console.log("tutorial 11");
type Student = {
    name: string;
    study: () => void;
};

type User = {
    name: string;
    login: () => void;
};

type Person = Student | User;

const person: Person = {
    name: "anna",
    study: () => console.log("Studying"),
};
// person;

// type predicate -> If this function returns true, then the value passed (person) should from now on be treated as type Student.
function isStudent(person: Person): person is Student {
    // return 'study' in person;
    // Type assertion — manually tells TS to treat a value as a specific type (no runtime check).
    return (person as Student).study !== undefined;
}

// Usage

if (isStudent(person)) {
    person.study(); // This is safe because TypeScript knows that 'person' is a Student.
} else {
    // in this case person is type "never"
    console.log(person);
}

type Shape = "circle" | "square";

// type never example
function draw(shape: Shape) {
    if (shape === "circle") {
        console.log("Drawing a circle");
    } else if (shape === "square") {
        console.log("Drawing a square");
    } else {
        // TypeScript says: shape is never
        // because there are no other shapes left
        const exhaustiveCheck: never = shape;
        console.log(exhaustiveCheck);
    }
}
// This pattern is called an exhaustiveness check — you use never to ensure all union cases are covered.
draw("circle");
draw("square");

// Challenge - Discriminated Unions and exhaustive check using the never type
// A discriminated union in TypeScript is a type that can be one of several different types, each identified by a unique literal property (the discriminator), allowing for type-safe handling of each possible variant.
type IncrementAction = {
    type: "increment";
    amount: number;
    timestamp: number;
    user: string;
};

type DecrementAction = {
    type: "decrement";
    amount: number;
    timestamp: number;
    user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action): number {
    switch (action.type) {
        case "increment":
            return state + action.amount;
        case "decrement":
            return state - action.amount;
        default:
            const unexpectedAction: never = action;
            throw new Error(`Unexpected Action: ${unexpectedAction}`);
    }
}
const newState = reducer(15, {
    user: "john",
    type: "increment",
    amount: 5,
    timestamp: 123456,
});
console.log(newState);
