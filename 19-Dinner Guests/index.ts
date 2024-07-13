/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner.*/

// Storing the guest list in an array
let guestList: string[] = ["Quaid-E-Azam", "Allama Iqbal", "Nikola Tesla"];

// Printing an invitation message to each person in the guest list
// guestList.forEach(guest => {
//     console.log(`Dear ${guest}, you are cordially invited to dinner.`);
// });

// Found a bigger dinner table
console.log("We found a bigger dinner table! \n");

// Adding new guests
guestList.unshift("Zain");  // Beginning
guestList.splice(2, 0, "Raza");  // Middle
guestList.push("Aehed");  // End

// Printing the number of people invited to dinner
console.log(`I am inviting ${guestList.length} people to dinner.`);
