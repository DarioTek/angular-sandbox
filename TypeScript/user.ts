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


const user3: User = {
  name: "Hayex",
  id: 2,
};

console.log(user.name);
console.log(user2.name);
console.log(user3.name);

//Since JavaScript supports classes and object-oriented programming, so does TypeScript. 
//You can use an interface declaration with classes: 
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user4: User = new UserAccount("Murphy", 1);
console.log(user4.name);
