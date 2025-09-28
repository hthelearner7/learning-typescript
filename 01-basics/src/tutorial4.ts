// interface => allow to setup shape for objects (only objects)

console.log("learning interfaces");

interface Book {
    // type Book = { // you can also use type alias
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;
    // methods
    printAuthor(): void;
    printTitle(msg: string): string;
    printSomething: (someValue: number) => number;
}

const deepWork: Book = {
    isbn: 1,
    title: "The Morisaki Bookshop",
    author: "Satoshi",
    genre: "Fiction",
    // arrow func. syntax is not used here
    // since another syntax is used i can access data using this inside the function printAuthor
    printAuthor() {
        console.log(`Author of ${this.title} is ${this.author}`);
    },
    printTitle(val) {
        return `${this.title} ${val}`;
    },
    // ? first option
    // printSomething: function (someValue) {
    //     return someValue;
    // },
    // ? second option
    // printSomething: (someValue) => {
    //     console.log(this); // no access to this in arrow function
    //     return someValue;
    // },
    // ? third option
    printSomething(someValue) {
        console.log("this", this); // no access to this in arrow function
        return someValue;
    },
};
console.log(deepWork);
deepWork.printAuthor();
console.log(deepWork.printTitle("is an awesome book"));
console.log(deepWork.printSomething(100));

interface Computer {
    readonly id: number;
    brand: string;
    ram: number;
    storage?: number;
    upgradeRam(increaseInRam: number): number;
}

const laptop: Computer = {
    id: 1,
    brand: "random",
    ram: 4,
    upgradeRam(upgRam) {
        this.ram += upgRam;
        return this.ram;
    },
};
laptop.storage = 200;
laptop.upgradeRam(10);
console.log(laptop);

interface Person {
    name: string;
    getDetails(): string;
}

// adding extra property
interface Person {
    age: number;
}

interface DogOwner {
    dogName: string;
    getDogDetails(): string;
}

const person: Person = {
    name: "john",
    age: 20,
    getDetails() {
        return `Name: ${this.name}, Age:${this.age}`;
    },
};
console.log(person.getDetails());

interface Employee extends Person {
    employeeId: number;
}
const employee: Employee = {
    employeeId: 101,
    name: "jacky",
    age: 22,
    getDetails() {
        return `Name: ${this.name}, Age:${this.age}, Employee ID: ${this.employeeId}`;
    },
};

console.log(employee.getDetails());

interface Manager extends Person, DogOwner {
    employees: Employee[];
    managePeople(): void;
}
let m1: Manager = {
    employees: [employee],
    name: "hari",
    age: 34,
    dogName: "sheru",
    getDogDetails() {
        return `Dog Name: ${this.dogName}`;
    },
    getDetails() {
        return `Name: ${this.name}, Age:${this.age}`;
    },
    managePeople() {
        console.log(`managing ${this.employees.length} people`);
    },
};
console.log("here");

console.log(m1);
console.log(m1.getDetails());
console.log(m1.getDogDetails());
m1.managePeople();
