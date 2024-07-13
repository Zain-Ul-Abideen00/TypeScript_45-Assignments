/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for 
the results of each test. 

Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False

let age: number = 25;

console.log("Is age == 25? I predict True.");
console.log(age == 25); // True

console.log("Is age > 20? I predict True.");
console.log(age > 20); // True

console.log("Is age < 20? I predict False.");
console.log(age < 20); // False

let city: string = 'New York';

console.log("Is city == 'new york'? I predict False.");
console.log(city == 'new york'); // False (case-sensitive)

console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york'); // True

let scores: number[] = [95, 85, 76];

console.log("Is scores.length == 3? I predict True.");
console.log(scores.length == 3); // True

console.log("Is scores[0] == 95? I predict True.");
console.log(scores[0] == 95); // True

console.log("Is scores[1] == 90? I predict False.");
console.log(scores[1] == 90); // False

let herName: string = 'Alice';

console.log("Is herName == 'alice'? I predict False.");
console.log(herName == 'alice'); // False (case-sensitive)

console.log("Is herName != 'Bob'? I predict True.");
console.log(herName != 'Bob'); // True
