/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15.
Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
// Storing the guest list in an array
var guestList = ["Quaid-E-Azam", "Allama Iqbal", "Nikola Tesla"];
// Printing an invitation message to each person in the guest list
// guestList.forEach(guest => {
//     console.log(`Dear ${guest}, you are cordially invited to dinner.`);
// });
// Found a bigger dinner table
console.log("We found a bigger dinner table! \n");
// Adding new guests
guestList.unshift("Zain"); // Beginning
guestList.splice(2, 0, "Raza"); // Middle
guestList.push("Aehed"); // End
// Printing a new set of invitation messages
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner."));
});
