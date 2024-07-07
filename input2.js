process.stdin.setEncoding('utf8');

console.log("Enter your input:");

process.stdin.on('data', function(data) {
    // Remove the newline character from input
    const input = data.trim();
    
    // Use the input as needed
    console.log("You entered:", input);
    
    // Optionally, you can close the input stream if needed
    // process.stdin.destroy();
});

// This is optional but can be used to handle errors or when the input stream ends
process.stdin.on('end', function() {
    console.log('Input stream ended.');
});
