/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/

function make_shirt(size: string = 'L', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and the message printed on it is: ${message}`);
}

make_shirt();
make_shirt('M');
make_shirt('S', 'TypeScript is awesome!');
