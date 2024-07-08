//Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array.
//Use the reduce method to calculate product of all numbers in the array.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your input: ', (input) => {
    // Use the input as needed
    console.log("You entered:", input);
    var n = input
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }

    let sum1 = arr.reduce((prev, curr) => (prev + curr))
    let prod = arr.reduce((initial, final) => (initial * final))

    console.log(`The sum is ${sum1}`)
    console.log(`The product is ${prod}`)

    // Close the readline interface
    rl.close();
});


