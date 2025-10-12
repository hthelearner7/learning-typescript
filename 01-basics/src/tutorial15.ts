console.log("classes");
class Book {
    title: string;
    author: string;
    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}

const deepWork: Book = new Book("morisaki bookshop", "satoshi");
console.log(deepWork);
