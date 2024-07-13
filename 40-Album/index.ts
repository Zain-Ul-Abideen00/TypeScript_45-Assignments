/*Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, 
and it should return a Object containing these two pieces of information. 
Use the function to make three dictionaries representing different albums. 
Print each return value to show that Objects are storing the album information correctly. 
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
Make at least one new function call that includes the number of tracks on an album.*/

// Define the Album interface to describe the structure of an album object
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

// Function to create an album object
function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create three albums using the function
let album1 = make_album("The Beatles", "Abbey Road");
let album2 = make_album("Pink Floyd", "The Dark Side of the Moon");
let album3 = make_album("Led Zeppelin", "IV", 8);

// Print each album to show that the objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);

