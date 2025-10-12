console.log("classes");
class Book {
    public readonly title: string;
    public author: string;
    private checkedout: boolean = false;
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    public checkout() {
        this.checkedout = this.toggleCheckOut();
    }

    public isCheckedOut() {
        return this.checkedout;
    }

    private toggleCheckOut() {
        return !this.checkedout;
    }
}

const deepWork: Book = new Book("morisaki bookshop", "satoshi");
// deepWork.checkout = true;
// deepWork.title = "atomic habits"; // error

console.log(deepWork.isCheckedOut());
deepWork.checkout();
console.log(deepWork);

class Pen {
    constructor(
        public color: string,
        readonly brand: string,
        private price: number
    ) {}
    get checkPrice() {
        return this.price;
    }

    // getter
    get info() {
        return `${this.color} Pen by ${this.brand}, Price ${this.price}`;
    }

    private set priceUpdate(price: number) {
        this.price = price;
    }

    public get someInfo() {
        this.priceUpdate = 30;
        return `${this.color} Pen by ${this.brand} Price ${this.price}`;
    }
}

let pen1 = new Pen("blue", "reynolds", 10);
console.log(pen1);

console.log(pen1.checkPrice);
// pen1.priceUpdate = 20;

console.log(pen1.info);
console.log(pen1.someInfo);

// interface by class
interface IPerson {
    name: string;
    age: number;
    greet(): void;
}

class Person implements IPerson {
    constructor(public name: string, public age: number) {}
    greet() {
        console.log(
            `Hello, my name is ${this.name} and I'm ${this.age} years old.`
        );
    }
    extraProp = "iAmExtra";
}

const abcd = new Person("xyz", 20);
console.log(abcd);

abcd.greet();
