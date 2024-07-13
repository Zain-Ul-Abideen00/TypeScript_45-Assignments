/*Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.*/

// Define a function that accepts an array of magician names and prints each name
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define a function that modifies the array of magicians by adding "the Great" to each name
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `The Great ${magicians[i]}`;
    }
}

// Create an array of magician's names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"];

// Modify the array of magicians
make_great(magicians);

// Call the function with the modified array of magician's names
show_magicians(magicians);
