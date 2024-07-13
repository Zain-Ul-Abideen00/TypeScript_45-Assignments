"use strict";
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used.
If it has, print a message that the person will need to enter a new username.
If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
// let current_users = ['john', 'jane', 'admin', 'eric', 'alice'];
// let new_users = ['jane', 'admin', 'tom', 'harry', 'peter'];
// for (let new_user of new_users) {
//     if (current_users.some(user => user.toLowerCase() == new_user.toLowerCase())) {
//         console.log(`${new_user} will need to enter a new username.`);
//     } else {
//         console.log(`${new_user} is available.`);
//     }
// }
// List of current users
let current_users = ['Admin', 'Zain', 'Hassan', 'Raza', 'Aehed'];
// List of new users
let new_users = ['Admin', 'ZAIN', 'Bilal', 'Samar Ali', 'raza'];
// Function to check if usernames are unique
function checkUsernames(current, newUsers) {
    // Convert current users to lowercase for case insensitive comparison
    let lowerCurrentUsers = current.map(user => user.toLowerCase());
    for (let newUser of newUsers) {
        // Convert new user to lowercase for case insensitive comparison
        if (lowerCurrentUsers.includes(newUser.toLowerCase())) {
            console.log(`The username "${newUser}" is already taken. Please enter a new username.`);
        }
        else {
            console.log(`The username "${newUser}" is available.`);
        }
    }
}
// Check the usernames
checkUsernames(current_users, new_users);
