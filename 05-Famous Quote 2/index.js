//Q5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
//Then compose your message and store it in a new variable called message. Print your message.
// Famous person's name
var famous_person = "Thomas A. Edison";
// Quote by the famous person
var quote = "I didn't fail 1000 times. The light bulb was an invention with 1000 steps.";
// Construct the message
var message = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log(message);
