/*Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs,
such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.*/
// Define a function that stores information about a car in an object
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initialize the car object with required properties
    var car = { manufacturer: manufacturer, model: model };
    // Add additional properties to the car object
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var _b = options_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
// Call the function with the required information and additional name-value pairs
var car1 = create_car("Toyota", "Camry", ["color", "blue"], ["sunroof", true]);
var car2 = create_car("Tesla", "Model 3", ["color", "red"], ["autopilot", true]);
// Print the car objects to make sure all the information was stored correctly
console.log(car1);
console.log(car2);
