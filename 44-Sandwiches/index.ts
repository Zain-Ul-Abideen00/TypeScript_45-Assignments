/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. Call the function three times, 
using a different number of arguments each time.*/

// Define a function that accepts an array of items and prints a summary of the sandwich being ordered
function make_sandwich(...items: string[]): void {
    console.log("\n Making a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Your sandwich is ready!");
}

// Call the function three times with different numbers of arguments
make_sandwich("Ham", "Cheese", "Lettuce", "Tomato");
make_sandwich("Turkey", "Bacon", "Avocado");
make_sandwich("Peanut Butter", "Jelly");
