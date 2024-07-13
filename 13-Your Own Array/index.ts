/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
and make a list that stores several examples. Use your list to print a series of statements about these items, 
such as “I would like to own a Honda motorcycle.” */

// List favorite modes of transportation and print statements about them.
let favoriteTransportations: string[] = ["Honda motorcycle", "Tesla car", "Helicopter"];

// Print statements about each item
favoriteTransportations.forEach(transport => console.log(`I would like to own a ${transport}.`));
