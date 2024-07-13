/*Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/
// Define a function that accepts an array of magician names and prints each name
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define a function that modifies the array of magicians by adding "the Great" to each name
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great ".concat(magicians[i]);
    }
}
// Create an array of magician's names
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"];
// Modify the array of magicians
make_great(magicians);
// Call the function with the modified array of magician's names
show_magicians(magicians);
