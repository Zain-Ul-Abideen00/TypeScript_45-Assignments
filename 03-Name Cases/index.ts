//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//store a person's name in a variable
let myName: string = "zain ul abideen";

// Lowercase
let lowercaseName: string = myName.toLowerCase();
console.log("Lowercase:", lowercaseName);

// Uppercase
let uppercaseName: string = myName.toUpperCase();
console.log("Uppercase:", uppercaseName);

// Title Case
//Here, the map function iterates through each word, capitalizes the first letter with toUpperCase(),
//converts the rest to lowercase with toLowerCase(), and joins them back with spaces using join(" ").

let words: string[] = myName.split(" ");

let titleCaseName: string = words
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");

console.log("Title Case:", titleCaseName);