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
