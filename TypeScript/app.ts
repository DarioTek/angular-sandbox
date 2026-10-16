// app.ts

// Explicit type annotation
const userName: string = "Dario";

// Function with typed parameter and return value
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Execute the function
const message: string = greet(userName);

console.log(message);
console.log("TypeScript is working!");