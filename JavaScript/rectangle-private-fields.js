class Rectangle {
  #height = 0;
  #width;
  // Private fields cannot be accessed outside the class
  // They are only accessible within the class methods
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }

  // Method to get the area of the rectangle
  getArea() {
    return this.#height * this.#width;
  }
  // Method to get the perimeter of the rectangle
  getPerimeter() {
    return 2 * (this.#height + this.#width);
  }
}

r1 = new Rectangle(10, 20);
console.log(r1);
// Trying to access private fields directly will result in a syntax error
// console.log(r1.#height); // SyntaxError
// console.log(r1.#width); // SyntaxError

// Accessing the area and perimeter via class methods
console.log(r1.getArea()); // 200
console.log(r1.getPerimeter()); // 60