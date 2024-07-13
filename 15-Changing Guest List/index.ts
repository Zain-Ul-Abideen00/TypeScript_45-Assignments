/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

// Storing the guest list in an array
let guestList: string[] = ["Quaid-E-Azam", "Allama Iqbal", "Nikola Tesla"];

// Printing an invitation message to each person in the guest list
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
});

// Nikola Tesla can't make it to the dinner
console.log("\n Unfortunately, Nikola Tesla can't make it to the dinner. \n");

// Replacing Nikola Tesla with Kamran Tessori
guestList[2] = 'Kamran Tessori';

// Printing a new set of invitation messages
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
});
