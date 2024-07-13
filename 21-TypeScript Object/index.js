/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/
// Create an object to store information about a book
var book = {
    Title: "To Kill a Mockingbird",
    Author: "Harper Lee",
    Pages: 281,
    PublishedYear: 1960
};
// Printing the object
console.log(book, "\n");
// Print the book information
console.log("Title: ".concat(book.Title));
console.log("Author: ".concat(book.Author));
console.log("Pages: ".concat(book.Pages));
console.log("Published Year: ".concat(book.PublishedYear));
