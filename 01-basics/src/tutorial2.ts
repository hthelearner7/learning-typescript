let car: { brand: string; year: number } = { brand: "toyota", year: 2020 };
car.brand = "Audi";
console.log(car);

// let car1: { brand: string; year: number } = { brand: "audi", year: 2022 };

let book = { title: "book", cost: 20 };
let pen = { title: "pen" };
let notebook = { title: "notebook", cost: 10 };
let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// items[0].title = "b"; // readonly property

let bike: { brand: string; year: number } = { brand: "bmw", year: 2022 };
// bike.year = "oldbike";
// let laptop:{ brand: string, year:number } = {brand:"asus"}; // causes error
let laptop: { brand: string; year?: number } = { brand: "asus" };

let product1 = { title: "Shirt", price: 20 };
let product2 = { title: "Pants" };
let products: { title: string; price?: number }[] = [product1, product2];
// products.push({title:"cargo", price:"null"}); // error

// functions
function sayHi(name: string) {
    console.log(name.toUpperCase());
}
sayHi("hello");
// sayHi(1);

function calculateDiscount(
    price: number,
    hasDiscount: boolean = false
): number {
    // let hasDiscount = true;
    if (hasDiscount) {
        return price * 0.5;
    }
    return price;
}
console.log(calculateDiscount(100, true));
console.log(calculateDiscount(100));

function addThree(number: any) {
    let anotherNumber: number = 3;
    return number + anotherNumber;
}
const result = addThree(2);
const someValue = result;

const arrayOfNames: string[] = ["rahul", "shyam", "hari", "mohan"];
function checkName(name: string): boolean {
    for (let i of arrayOfNames) {
        if (name.toLowerCase() === i.toLowerCase()) {
            return true;
        }
    }
    return false;
}
console.log(checkName("rohan"));

function calcPrice(price: number, discount?: number): number {
    return price - (discount || 0);
}
console.log(calcPrice(1000));
console.log(calcPrice(1000, 100));

function calcScore(initScore: number, penaltyPoints: number = 0): number {
    return initScore - penaltyPoints;
}
console.log(calcScore(100, 20));
console.log(calcScore(100));

// using rest operator
function sum(msg: string, ...numbers: number[]): string {
    const doubled = numbers.map((num) => num * 2);
    console.log(doubled);
    let total = numbers.reduce((prev, current) => {
        return prev + current;
    }, 0);
    return `${msg}: ${total}`;
}

let res = sum("total is: ", 1, 2, 3, 4, 5);
console.log(res);

function logMsg(msg: string): void {
    console.log(msg);
    // return "hello"
}
logMsg("hello ts");

function processInput(input: string | number) {
    if (typeof input === "number") {
        console.log(input * 2);
    } else {
        console.log(input.toUpperCase());
    }
}
processInput(1);
processInput("hello");

function createEmployee({ id }: { id: number }): {
    id: number;
    isActive: boolean;
} {
    return { id, isActive: id % 2 == 0 };
}
console.log(createEmployee({ id: 1 }));
console.log(createEmployee({ id: 2 }));

// alternative

function createStudent(student: { id: number; name: string }): void {
    console.log(`Welome to the course ${student.name.toUpperCase()}`);
}
// createStudent({ id: 101, name: "ram", course: "bachelors of technology" });

// createStudent({ id: 101, name: "ram", course: "bachelors of technology" }); => error
const student2 = { id: 201, name: "shyam", course: "bachelors of design" };
createStudent(student2); // but here no such error

function processData(
    input: string | number,
    config: { reverse: boolean } = { reverse: false }
): string | number {
    if (typeof input === "number") {
        return input * input;
    }
    {
        return config.reverse
            ? input.split("").reverse().join("").toUpperCase()
            : input.toUpperCase();
    }
}

console.log(processData("hello", { reverse: true }));
console.log(processData("hello"));
console.log(processData(12));
console.log(processData(12, { reverse: true }));
