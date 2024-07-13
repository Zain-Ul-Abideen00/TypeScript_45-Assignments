/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
with a copy of the array of magicians’ names. Because the original array will be unchanged, 
return the new array and store it in a separate array. Call show_magicians() 
with each array to show that you have one array of the original names and 
one array with the Great added to each magician’s name.*/

// Define a function that accepts an array of magician names and prints each name
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define a function that modifies a copy of the array of magicians by adding "the Great" to each name
function make_great(magicians: string[]): string[] {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`The Great ${magician}`);
    }
    return great_magicians;
}

// Create an array of magician's names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"];

// Create a new array with "the Great" added to each magician's name
let great_magicians = make_great(magicians);

// Call the function with the original array of magician's names
console.log("Original magicians:");
show_magicians(magicians);

// Call the function with the modified array of magician's names
console.log("\n Great magicians:");
show_magicians(great_magicians);
