/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.*/


let names: string[] = ["Zain", "Raza", "Aehed"]; // Array of friends' names

// Print greeting with each name
names.forEach(name => console.log(`Hello, ${name}! How are you today?`));
