console.log("tutorial 6");
// Tuples are useful when you want to return multiple values from a function.

// By default, tuples in TypeScript are not read-only. This means you can modify the values of the elements in the tuple.However, TypeScript does provide a way to make tuples read-only using the readonly keyword.

// let person: [string, number] = [30, "john", 25]; // error

// console.log(person);

let date: [number, number, number] = [1, 2, 12];
// but you can push the same type of data
date.push(24);
date.push(48);
date.push(84);
date.push(9);
date.push(20);
date.push(240);
console.log("date", date);

//  what if you use readonly prop?
let dates: readonly [number, number] = [1, 2];
console.log("dates", dates);

// dates.push(96); // error

function getPerson(): [string, number] {
    return ["john", 25];
}
let randomPerson = getPerson();
console.log(randomPerson);
console.log(randomPerson[0]);
console.log(randomPerson[1]);

let susan: [string, number?] = ["susan"];
console.log(susan);
