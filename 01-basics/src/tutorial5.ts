interface Person {
    name: string;
}

interface DogOwner extends Person {
    dogName: string;
}

interface Manager extends Person {
    managePeople(): void;
    delegateTasks(): void;
}

function getEmployee(): Person | DogOwner | Manager {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
        // let p:Person ={name: "anita"};
        return { name: "anita" };
    } else if (randomNumber < 0.66) {
        return { name: "binita", dogName: "husky" };
    }
    return {
        name: "mohit",
        managePeople() {
            console.log(`${this.name} manages poeple.`);
        },
        delegateTasks() {
            console.log(
                "A manager should delegate authority to the best employees."
            );
        },
    };
}
const employee: Person | DogOwner | Manager = getEmployee();
console.log(employee);
// console.log(typeof employee);

// * “If this function returns true, then you can safely treat obj as a Manager inside that scope.”
function isManager(obj: Person | Manager | DogOwner): obj is Manager {
    // typeof will return type as object
    return "delegateTasks" in obj;
}
// console.log(isManager(employee));
if (isManager(employee)) {
    console.log("is a manager");
    employee.delegateTasks();
}

//? Interfaces can be implemented by classes, while type aliases cannot.
interface Man {
    name: string;
    greet(): void;
}

class Emp implements Man {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let john = new Emp("John");
john.greet(); // Outputs: Hello, my name is John
