/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.*/
// Define a function that accepts an array of magician names and prints each name
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Create an array of magician's names
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"];
// Call the function with the array of magician's names
show_magicians(magicians);
