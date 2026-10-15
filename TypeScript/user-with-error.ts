const user = {
  name: "Hayes",
  id: 0,
};

// Define a User interface to describe the shape of a user object
interface User {
  name: string;
  id: number;
}

// Create a new user object that conforms to the User interface
const user2: User = {
  name: "Hayez",
  id: 1,
};

// This will cause a TypeScript error because 'username' is not a property defined in the User interface
/*
const user3: User = {
  username: "Hayes",
Object literal may only specify known properties, and 'username' does not exist in type 'User'.
  id: 0,
};
*/

console.log(user.name);
console.log(user2.name);
