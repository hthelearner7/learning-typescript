// Generics - Create Generic Function and Interface

console.log("generics");

// const array1: string[] = ["apple", "mango", "banana", "pineapple"];
// const array2: number[] = [2, 4, 6, 8, 10];
// const array3: boolean[] = [true, false, true, false, false, true];
const array1: Array<string> = ["apple", "mango", "banana", "pineapple"];
const array2: Array<number> = [2, 4, 6, 8, 10];
const array3: Array<boolean> = [true, false, true, false, false, true];

function createString(arg: string): string {
    return arg;
}
const s = createString("hello");
console.log("str => ", s);

// we can create a generic function
// arg -> type T, return value -> type T
function genericFunction<T>(arg: T): T {
    return arg;
}

const someStringValue = genericFunction<string>("abc");
const someNumberValue = genericFunction<number>(1234);
const someBooleanValue = genericFunction<boolean>(true);
console.log(someBooleanValue, someNumberValue, someStringValue);

// likewise, we can create a generic interface

interface GenericInterface<T> {
    value: T;
    getValue: () => T;
}

const genericString: GenericInterface<string> = {
    value: "hello world",
    getValue: function () {
        return this.value;
    },
};
console.log(genericString.getValue());

async function someFunc(): Promise<string> {
    return "hello world";
}

const res = someFunc();
console.log("res => ", res);

async function someNumber(): Promise<number> {
    return 1234;
}

const res2 = someNumber();
console.log("res2 => ", res2);

// we are going to make this function generic
function generateStringArray(length: number, value: string): string[] {
    let result: string[];
    result = Array(length).fill(value);
    return result;
}
console.log(generateStringArray(6, "hello"));

// generics - generate arrays
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[];
    result = Array(length).fill(value);
    return result;
}
let arrayStrings = createArray(4, "hw");
let arrayNums = createArray(4, 4);
let arrayBooleans = createArray(4, true);
console.log(arrayStrings);
console.log(arrayNums);
console.log(arrayBooleans);

// pair

function pair<T, U>(param1: T, param2: U): [T, U] {
    return [param1, param2];
}

const ans = pair<number, string>(10, "hello");
console.log(ans);

function processValue<T extends string | number>(val: T): T | boolean {
    if (Math.random() < 0.33) return true;
    return val;
}
console.log(processValue("string"));
console.log(processValue(20));
// processValue(true); // error

type Car = {
    brand: string;
    model: string;
};

const car: Car = {
    brand: "ford",
    model: "mustang",
};

type Product = {
    name: string;
    price: number;
};

const product: Product = {
    name: "shoes",
    price: 1.99,
};

type Student = {
    name: string;
    age: number;
};

const student: Student = {
    name: "peter",
    age: 20,
};

// function printName<T extends Student | Product>(input: T): void {
//     console.log(input.name);
// }

function printName<T extends { name: string }>(input: T): void {
    console.log(input.name);
}
printName(student);
printName(product);

// Generics - Default Value
interface StoreData<T = any> {
    data: T[];
}

const storeNumbers: StoreData<number> = {
    data: [1, 2, 3, 4],
};
const storeRandoms: StoreData = {
    data: ["random", 1, true],
};
console.log(storeNumbers);
console.log(storeRandoms);
