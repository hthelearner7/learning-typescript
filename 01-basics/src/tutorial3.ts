// export type User = {id:number; name:string;isActive:boolean} // you can even export it

// type alias
export type User = { id: number; name: string; isActive: boolean };

const john: User = {
    id: 1,
    name: "john",
    isActive: true,
};
const susan: User = {
    id: 1,
    name: "susan",
    isActive: false,
};

function createUser(user: User): User {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);

    return user;
}

type stringOrNumber = string | number;

let value: stringOrNumber;
value = "hello";
value = 123;
console.log(value);

type Theme = "light" | "dark";
let theme: Theme;
theme = "dark";
theme = "light";

function setTheme(t: Theme) {
    theme = t;
}
setTheme("dark");
console.log(theme);
setTheme("light");
console.log(theme);

type Employee = {
    id: number;
    name: string;
    department: string;
};

type Manager = {
    id: number;
    name: string;
    employees: Employee[];
};

type Staff = Employee | Manager;

function printStaffDetails(s: Staff): void {
    // console.log(Object.keys(s).includes("employees"));
    if ("employees" in s) {
        console.log("Manager", s.employees.length);
    } else {
        console.log("Employee", s.department);
    }
}

printStaffDetails({
    id: 1,
    name: "ram",
    employees: [
        { id: 101, name: "priya", department: "design" },
        { id: 102, name: "prachi", department: "dev" },
    ],
});
printStaffDetails({ id: 2, name: "shyam", department: "frontend" });

let alice: Employee = { id: 103, name: "alice", department: "hr" };
let steve: Employee = { id: 104, name: "steve", department: "design" };

let bob: Manager = { id: 3, name: "alice", employees: [alice, steve] };

printStaffDetails(alice);
printStaffDetails(bob);
