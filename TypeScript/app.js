"use strict";
// app.ts
// Explicit type annotation
const userName = "Dario";
// Function with typed parameter and return value
function greet(name) {
    return `Hello, ${name}!`;
}
// Execute the function
const message = greet(userName);
console.log(message);
console.log("TypeScript is working!");
