/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/

// Create an object to store information about a book
let book: { Title: string, Author: string, Pages: number, PublishedYear: number } = {
    Title: "To Kill a Mockingbird",
    Author: "Harper Lee",
    Pages: 281,
    PublishedYear: 1960
};


// Printing the object
console.log(book, "\n");

// Print the book information individually
console.log(`Title: ${book.Title}`);
console.log(`Author: ${book.Author}`);
console.log(`Pages: ${book.Pages}`);
console.log(`Published Year: ${book.PublishedYear}`);
