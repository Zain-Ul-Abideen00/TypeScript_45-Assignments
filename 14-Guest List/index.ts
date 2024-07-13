/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner.*/

// List of people you’d like to invite to dinner and print a message to each.
let guestList: string[] = ["Quaid-E-Azam", "Allama Iqbal", "Nikola Tesla"];

// Print invitation message for each guest
guestList.forEach(guest => console.log(`Dear ${guest}, you are cordially invited to dinner.`));