/*Intentional Error: If you haven’t received an array index error in one of your programs yet, 
try to make one happen. Change an index in one of your programs to produce an index error. 
Make sure you correct the error before closing the program.*/

// Create an array to store a list of languages
let languages: string[] = ["English", "Spanish", "Urdu", "French", "German"];

// Attempt to access an index that doesn't exist
// This will cause an index error because the array has only 5 elements (index 0 to 4)
console.log(languages[5]); // undefined

// Correcting the error by accessing a valid index
console.log(languages[2]); // This will print "Urdu"

// Alternatively, use a safer approach by checking the index range
// let indexToAccess = 4;
// if (indexToAccess >= 0 && indexToAccess < languages.length) {
//     console.log(languages[indexToAccess]);
// } else {
//     console.log(`Index ${indexToAccess} is out of bounds`);
// }