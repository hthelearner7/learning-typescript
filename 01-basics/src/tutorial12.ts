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
