# Reference
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

# Commands
```bash
# Check node version
node --version

# Run javascript file for testing
node rectangle-with-static-initialization.js

node inheritance-super-keyword.js
```

# Question & Answer
***Is the prototype same a class definition?***

No, the prototype is not the same as the class definition, even though they are closely related under the hood in JavaScript.

To clear up how they differ:

The Class Definition (class Rectangle { ... }) is the high-level, human-readable blueprint you write in your code. Under the hood, JavaScript classes are actually built on top of traditional functions and prototypes, providing cleaner syntax (syntactic sugar) for object-oriented programming.

The Prototype (Rectangle.prototype) is a hidden, underlying JavaScript object that acts as a shared storage hub. When you write methods inside a class definition, JavaScript automatically attaches those methods to this separate prototype object behind the scenes so that all instances can share them.

Continuing the Neighborhood Analogy
The Class Definition is the architect's master plan and the set of rules used to construct the subdivision.

The Prototype is the actual physical community clubhouse where the shared instruction manuals (methods) are kept on a shelf for every homeowner to reference.

---
