const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your input: ', (input) => {
    // Use the input as needed
    console.log("You entered:", input);

    // Close the readline interface
    rl.close();
});
