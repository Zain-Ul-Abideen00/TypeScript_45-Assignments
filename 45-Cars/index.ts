/*Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly.*/

// Define an interface for the car object
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allows for additional properties
}

// Define a function that stores information about a car in an object
function create_car(manufacturer: string, model: string, ...options: [string, any][]): Car {
    // Initialize the car object with required properties
    const car: Car = { manufacturer, model };

    // Add additional properties to the car object
    for (let [key, value] of options) {
        car[key] = value;
    }

    return car;
}

// Call the function with the required information and additional name-value pairs
const car1 = create_car("Honda", "Civic", ["color", "blue"], ["sunroof", true]);
const car2 = create_car("Tesla", "Model 3", ["color", "red"], ["autopilot", true]);

// Print the car objects to make sure all the information was stored correctly
console.log(car1);
console.log(car2);
