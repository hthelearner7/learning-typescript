enum ServerResponseStatus {
    Success = 200,
    Error = 500,
}
console.log(ServerResponseStatus);

Object.values(ServerResponseStatus).forEach((i) => {
    if (typeof i === "number") {
        console.log(i);
    }
});

interface ServerResponse {
    result: ServerResponseStatus;
    data: string[];
}

function getServerResponse(): ServerResponse {
    return {
        result: ServerResponseStatus.Success,
        data: ["first item", "second item"],
    };
}

const response: ServerResponse = getServerResponse();
console.log(response);

enum NumericEnum {
    Member = 1,
}

enum StringEnum {
    Member = "Value",
}

let numericEnumValue: NumericEnum = 1; // This is allowed
console.log(numericEnumValue); // 1

// let stringEnumValue: StringEnum = 'Value'; // This is not allowed

enum UserRole {
    Admin = "admin",
    Manager = "manager",
    Employee = "emp",
}

type User = {
    id: number;
    name: string;
    role: UserRole;
    contact: [string, string];
};

function createUser(user: User): User {
    return user;
}

const user1: User = createUser({
    id: 1,
    name: "vaibhav",
    role: UserRole.Employee,
    contact: ["vaibhav@kaju@example.com", "1234432112"],
});
console.log(user1);
