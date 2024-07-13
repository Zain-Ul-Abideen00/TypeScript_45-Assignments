/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
// Initial array of usernames
var usernames = ['Admin', 'Zain', 'Hassan', 'Raza', 'Aehed'];
// Function to greet users
function greetUsers(users) {
    if (users.length === 0) {
        console.log("\n We need to find some users! \n");
    }
    else {
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var username = users_1[_i];
            if (username === 'Admin') {
                console.log("Hello admin, would you like to see a status report?");
            }
            else {
                console.log("Hello ".concat(username, ", thank you for logging in again."));
            }
        }
    }
}
// Greet users with the initial array
greetUsers(usernames);
// Remove all usernames
usernames = [];
// Check if the list is empty and print the appropriate message
greetUsers(usernames);
