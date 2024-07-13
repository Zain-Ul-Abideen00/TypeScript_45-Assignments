//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//store a person's name in a variable
var myName = "zain ul abideen";
// Lowercase
var lowercaseName = myName.toLowerCase();
console.log("Lowercase:", lowercaseName);
// Uppercase
var uppercaseName = myName.toUpperCase();
console.log("Uppercase:", uppercaseName);
// Title Case
//Here, the map function iterates through each word, capitalizes the first letter with toUpperCase(),
//converts the rest to lowercase with toLowerCase(), and joins them back with spaces using join(" ").
var words = myName.split(" ");
var titleCaseName = words
    .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
    .join(" ");
console.log("Title Case:", titleCaseName);
