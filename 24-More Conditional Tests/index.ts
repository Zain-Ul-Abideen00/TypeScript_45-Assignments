/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, 
write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/

//Tests for equality and inequality with strings

let fruit = 'apple';

console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple'); // True

console.log("Is fruit == 'banana'? I predict False.");
console.log(fruit == 'banana'); // False

// Tests using the lower case function

let city = 'New York';

console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york'); // True

console.log("Is city.toLowerCase() == 'NEW YORK'? I predict False.");
console.log(city.toLowerCase() == 'NEW YORK'); // False

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let number = 10;

console.log("Is number == 10? I predict True.");
console.log(number == 10); // True

console.log("Is number != 5? I predict True.");
console.log(number != 5); // True

console.log("Is number > 5? I predict True.");
console.log(number > 5); // True

console.log("Is number < 15? I predict True.");
console.log(number < 15); // True

console.log("Is number >= 10? I predict True.");
console.log(number >= 10); // True

console.log("Is number <= 5? I predict False.");
console.log(number <= 5); // False

//Tests using "and" and "or" operators

let age = 25;

console.log("Is age > 20 and age < 30? I predict True.");
console.log(age > 20 && age < 30); // True

console.log("Is age > 30 or age < 20? I predict False.");
console.log(age > 30 || age < 20); // False

//Test whether an item is in an array
let fruits = ['apple', 'banana', 'mango'];

console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.includes('apple')); // True

console.log("Is 'orange' in fruits? I predict False.");
console.log(fruits.includes('orange')); // False

// Test whether an item is not in an array
console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes('grape')); // True

console.log("Is 'mango' not in fruits? I predict False.");
console.log(!fruits.includes('mango')); // False
