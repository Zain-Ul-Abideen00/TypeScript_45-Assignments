/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end of your program.*/
// Storing the guest list in an array
var guestList = ["Zain", "Quaid-E-Azam", "Raza", "Allama Iqbal", "Nikola Tesla", "Aehed"];
// Found out that only two people can be invited
console.log("\n Unfortunately, we can invite only two people for dinner. \n");
// Removing guests until only two remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
}
console.log("");
// Printing a message to the two people still invited
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
});
// Removing the last two names from the list
guestList.pop();
guestList.pop();
// Printing the list to make sure it is empty
console.log(guestList);
