/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.*/
var names = ["Zain", "Raza", "Aehed"]; // Array of friends' names
// Print greeting with each name
names.forEach(function (name) { return console.log("Hello, ".concat(name, "! How are you today?")); });
