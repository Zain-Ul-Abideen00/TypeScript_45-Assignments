//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
//so the whitespace around the name is displayed. Then print the name after striping the white spaces.


let personName: string = "\t\n Zain UL Abideen \t\n"; // Name with various whitespaces

console.log("Name with whitespaces:");
console.log(personName); // Print name with whitespaces

console.log("Name after stripping whitespaces:");
console.log(personName.trim()); // Print name after trimming whitespaces